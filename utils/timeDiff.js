const dayjs = require("dayjs");

function timeDifference(isoString) {
  let now = dayjs();
  let givenDate = dayjs(isoString);

  let diff = givenDate - now;

  return diff;
}

module.exports = { timeDifference };
