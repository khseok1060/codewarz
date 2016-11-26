function combineStrings() {
  var strArr = Array.prototype.slice.call(arguments);
  var result = [];

  if(strArr.length === 0) {
    return '';
  }

  var maxIndex = 0;

  for(var i = 0; i < strArr.length; i++) {
    if(maxIndex < strArr[i].length) {
      maxIndex = strArr[i].length;
    }
  }

  for(var j = 0; j < maxIndex; j++) {
    for(var k = 0; k < strArr.length; k++) {
      if(strArr[k][j] !== '') {
        result.push(strArr[k][j]);
      }
    }
  }

  return result.join('');
}

module.exports = combineStrings;
