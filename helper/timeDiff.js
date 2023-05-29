const dayjs = require("dayjs");

function timeDifference(isoString) {
  let now = dayjs();
  let givenDate = dayjs(isoString);

  let diff = givenDate - now;

  return diff;
}

console.log(timeDifference("2023-05-29T11:30:00Z"));

module.exports = { timeDifference };
