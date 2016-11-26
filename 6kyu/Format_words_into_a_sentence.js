function formatWords(words){
  if(words === null || words.length === 0) {
    return '';
  }

  var newWords = words.filter(function(a){
    if(a !== '') {
      return a;
    }
  });

  if(newWords.length === 0) {
    return '';
  } else if(newWords.length === 1) {
    return newWords[0];
  } else if(newWords.length === 2) {
    return newWords[0] + ' and ' + newWords[1];
  } else {
    var result = '';
    for(var i = 0; i < newWords.length - 2; i++) {
      result = result + newWords[i] + ', ';
    }
    return result + newWords[newWords.length - 2] + ' and ' + newWords[newWords.length - 1];
  }

}

module.exports = formatWords;
