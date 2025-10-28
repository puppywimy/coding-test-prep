import _axios from "axios";
import { BASE_URL, PROBLEM_ID, X_AUTH_TOKEN } from "./config.js";
import { addToLog } from "./utils.js";

async function getAuthKey(problemId) {
  let response = undefined;
  try {
    response = await _axios
      .create({
        baseURL: BASE_URL,
        headers: {
          "X-Auth-Token": X_AUTH_TOKEN,
          "Content-Type": "application/json",
        },
      })
      .post("/start", { problem: problemId });
  } catch (error) {
    addToLog("error: API error:");
    addToLog(error.response ?? error);
  }
  const { auth_key: authKey, problem, day } = response.data;
  return authKey;
}

const authKey = await getAuthKey(PROBLEM_ID);

const axios = _axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: authKey,
    "Content-Type": "application/json",
  },
});

async function getNewRequests() {
  let response;
  try {
    response = await axios.get("/new_requests");
  } catch (error) {
    addToLog("error: API error:");
    addToLog(error.response ?? error);
  }
  const { reservations_info: reservations } = response.data;
  return reservations;
}

async function putReply(replies) {
  try {
    await axios.put("/reply", { replies });
  } catch (error) {
    addToLog("error: API error:");
    addToLog(error.response ?? error);
    return false;
  }
  return true;
}

async function putSimulate(assignments) {
  let response;
  try {
    response = await axios.put("/simulate", { room_assign: assignments });
  } catch (error) {
    addToLog("error: API error:");
    addToLog(error.response ?? error);
  }
  const { day, fail_count: failCount } = response.data;
  return { day, failCount };
}

async function getScore() {
  let response;
  try {
    response = await axios.get("/score");
  } catch (error) {
    addToLog("error: API error:");
    addToLog(error.response ?? error);
  }
  const {
    accuracy_score: accuracyScore,
    efficiency_score: efficiencyScore,
    penalty_score: penaltyScore,
    score,
  } = response.data;
  return {
    accuracyScore,
    efficiencyScore,
    penaltyScore,
    score,
  };
}

export { getNewRequests, putReply, putSimulate, getScore };
