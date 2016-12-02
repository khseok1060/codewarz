function interleave() {

 if(arguments.length === 0) {
    return [];
  }

  var argArr2 = Array.prototype.slice.call(arguments);
  var argArr = []

  for(var a = 0; a < argArr2.length; a++) {
    if(argArr2[a] !== null) {
      argArr.push(argArr2[a]);
    }
  }

  var maxLength = 0;
  var result = [];

  for(var i = 0; i < argArr.length; i++) {
    if(maxLength < argArr[i].length) {
      maxLength = argArr[i].length;
    }
  }

  for(var j = 0; j < maxLength; j++) {
    for(var k = 0; k < argArr.length; k++) {
      result.push(argArr[k][j]);
    }
  }

  return result;
}

module.exports = interleave;
