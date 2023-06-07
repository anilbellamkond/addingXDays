var addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const result = addDays(new Date(2020, 08, 22), days);
  const year = String(result.getFullYear());
  const month = String(result.getMonth() + 1);
  const date = String(result.getDate());
  return `${date}-${month}-${year}`;
};

module.exports = getDateAfterXDays;
console.log(getDateAfterXDays(3));
