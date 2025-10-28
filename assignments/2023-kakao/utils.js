import { createWriteStream } from "fs";
import { MODE } from "./config.js";

function createTimestamp() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${`0${hours}`.slice(-2)}${`0${minutes}`.slice(
    -2
  )}${`0${seconds}`.slice(-2)}`;
}

function normalizeObject(object) {
  if (object === undefined) return "";
  if (typeof object === "string") return object;
  return JSON.stringify(object, null, 2);
}

const writeStream = createWriteStream(`./logs/log_${createTimestamp()}`);

// ===

function addToLog(object) {
  if (MODE !== "development") return;
  writeStream.write(`${normalizeObject(object)}\n`);
}

function getHotelLog(hotel) {
  const rows = hotel.map((row) =>
    row.map((element) => `  ${element}`.slice(-3)).join(" ")
  );
  rows.reverse();
  return rows.join("|\n");
}

export { getHotelLog, addToLog };
