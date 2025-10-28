import { PROBLEM_ID, MODE } from "./config.js";
import problems from "./problems.js";
import { getNewRequests, getScore, putReply, putSimulate } from "./api.js";
import { getHotelLog, addToLog } from "./utils.js";

addToLog(`선택한 시나리오: ${PROBLEM_ID}`);

const problem = problems.find((problem) => problem.id === PROBLEM_ID);

if (problem === undefined) {
  throw "선택한 시나리오를 찾지 못 했습니다.";
}

// ===

const { height, width, max_day: maxDay } = problem;
const hotel = Array.from({ length: height }).map(() =>
  Array.from({ length: width }).map(() => 0)
);
const checkInMap = [];
const reservationsQueue = [];
let currentDay = 1;

function assignRooms(reservation) {
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width - reservation.amount + 1; j++) {
      let flag = true;
      for (let k = j; k < j + reservation.amount; k++) {
        if (hotel[i][k] > reservation.checkedInAt) {
          flag = false;
          break;
        }
      }
      if (!flag) continue;
      for (let k = j; k < j + reservation.amount; k++) {
        hotel[i][k] = reservation.checkedOutAt;
      }
      const checkIn = {
        id: reservation.id,
        firstRoom: 1000 * (i + 1) + (j + 1),
        amount: reservation.amount,
      };
      if (checkInMap[reservation.checkedInAt]) {
        checkInMap[reservation.checkedInAt].push(checkIn);
      } else {
        checkInMap[reservation.checkedInAt] = [checkIn];
      }
      return true;
    }
  }
  return false;
}

while (currentDay <= maxDay) {
  if (MODE === "development") {
    console.log(`currentDay: ${currentDay} / ${maxDay}`);
  }

  addToLog("\n");
  addToLog(`# ${currentDay}일차 ====================`);
  addToLog();
  addToLog(`${currentDay}일차 호텔 상황을 보고하겠습니다.`);
  addToLog();
  addToLog(getHotelLog(hotel));

  // 1. 금일 요청된 예약 확인
  for (const {
    id,
    amount,
    check_in_date,
    check_out_date,
  } of await getNewRequests()) {
    reservationsQueue.push({
      id,
      amount,
      checkedInAt: check_in_date,
      checkedOutAt: check_out_date,
      expiredAt: Math.min(currentDay + 14, check_in_date - 1),
    });
  }
  reservationsQueue.sort((a, b) =>
    a.expiredAt < b.expiredAt
      ? -1
      : a.expiredAt > b.expiredAt
      ? 1
      : a.amount * a.checkedOutAt < b.amount * a.checkedOutAt
      ? -1
      : 1
  );

  addToLog();
  addToLog("금일 요청된 예약을 확인했습니다. reservationsQueue updated.");
  addToLog(reservationsQueue);

  // 2. 금일까지인 예약 확정
  const replies = [];
  while (reservationsQueue[0]?.expiredAt === currentDay) {
    const reservation = reservationsQueue.shift();
    const reply = { id: reservation.id, reply: "refused" };
    if (assignRooms(reservation)) {
      reply.reply = "accepted";
    }
    replies.push(reply);
  }
  if (replies.length) {
    await putReply(replies);

    addToLog();
    addToLog("다음 예약들이 확정되었습니다.");
    addToLog(replies);
  }

  // 3. 금일 체크인 일정이 있다면 진행 및 하루 마무리
  const assignments =
    checkInMap[currentDay]?.map((checkIn) => ({
      id: checkIn.id,
      room_number: checkIn.firstRoom,
    })) ?? [];
  const { day: newDay, failCount } = await putSimulate(assignments);

  addToLog();
  addToLog("금일 체크인을 진행하고 하루를 마무리합니다.");
  addToLog(assignments);
  addToLog(`${failCount}회 체크인 실패`);
  addToLog();
  addToLog(`${currentDay}일차, 호텔 상황 보고 완료.`);

  currentDay = newDay;

  // ==================== next day ====================

  // "초당 10회가 넘는 API 호출은 서버가 응답하지 않을 수 있습니다."
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve(true);
    }, 100)
  );
}

addToLog("\n");
addToLog(await getScore());
