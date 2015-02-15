module.exports.stream = function (conditionalFn, actionFn) {
  while(conditionalFn()) {
    actionFn();
  }
};

module.exports.sumNumbers = function (numbers) {
  var numberCount = numbers.length;
  var total = 0;
  while(numberCount !== 0) {
    total += numbers[numberCount - 1];
    numberCount--;
  }
  return total;
};


