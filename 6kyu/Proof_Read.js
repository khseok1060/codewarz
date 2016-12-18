function proofread (str) {

  var strArray = str.split(' ');

  for(let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].toLowerCase();
  }

  for(let j = 0; j < strArray.length; j++) {
    var wordbreak = strArray[j].split('');
    if(j === 0) {
      wordbreak[0] = wordbreak[0].toUpperCase();
    } else if(strArray[j-1][strArray[j-1].length-1] === '.') {
      wordbreak[0] = wordbreak[0].toUpperCase();
    }

    for(let k = 0 ; k < wordbreak.length; k++) {
      if(wordbreak[k] === 'i' && wordbreak[k+1] === 'e') {
        wordbreak[k] = 'e';
        wordbreak[k+1] = 'i'
      }
    }
    strArray[j] = wordbreak.join('');
  }

  return strArray.join(' ');

}

module.exports = proofread;
