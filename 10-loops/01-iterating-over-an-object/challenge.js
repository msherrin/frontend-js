module.exports.getKeys = function(object) {
  output = [];
  for (var key in object) {
    output.push(key);
  }
  return output;
};

module.exports.getValues = function (object){
  var output = [];
  for (var key in object){
    output.push (object[key]);
  }
  return output;
};

module.exports.objectToArray = function(object) {
  output = [];
  for (k in object) {
    output.push(k + " is " + object[k]);
  }
  return output;
};