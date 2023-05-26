const convertToCelsius = function(temp) {
  let answer = (temp - 32) * (5 / 9)
  return +answer.toFixed(1)
};

const convertToFahrenheit = function(temp) {
  let answer = (temp * 9 / 5) + 32
  return +answer.toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
