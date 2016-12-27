function grabscrab(anagram, dictionary) {
  var anagramSort = anagram.split('').sort().join('');
  var result = [];

  for(var i = 0; i < dictionary.length; i++) {
    var dictSort = dictionary[i].split('').sort().join('');
    if(anagramSort === dictSort) {
      result.push(dictionary[i]);
    }
  }

  return result;
}

module.exports = grabscrab;
