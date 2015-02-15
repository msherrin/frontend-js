module.exports.sumNumbers = function(numbers){
 var sum = 0;
 for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
 }
 return sum;
};

module.exports.splitAndLowerCaseString = function (inputString){
  var output = inputString.split(',');
  for (var i = 0; i< output.length; i++) {
    output[i] = output[i].toLowerCase();
  }
  return output;
};

module.exports.addIndex = function (newArray){
  var output = [];
  for (var i = 0; i < newArray.length; i++){
    output.push(i + " is " + newArray[i]);
  }
  return output;
};
