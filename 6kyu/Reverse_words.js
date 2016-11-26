function reverseWords(str) {
  var strArr = str.split(' ');
  var result = [];

  for(var i = 0; i < strArr.length; i++) {
    var reverseStr = ''
    for(var j = strArr[i].length - 1; j > -1; j--) {
      reverseStr = reverseStr + strArr[i][j];
    }
    result.push(reverseStr);
  }

  return result.join(' ');
}

module.exports = reverseWords;
