function mirror(text) {

  var textArr = text.split(' ');
  var maxLeng = 0;
  var star = '';
  var result = [];

  for(var i = 0; i < textArr.length; i++) {
    if(maxLeng < textArr[i].length) {
      maxLeng = textArr[i].length;
    }
  }

  maxLeng = maxLeng + 4;

  while(star.length < maxLeng){
    star = star + '*';
  }

  for(var j = 0; j < textArr.length; j++) {
    var snt = '* ';
    snt = snt + textArr[j].split('').reverse().join('');
    for(var k = snt.length; k < maxLeng; k++) {
      if(k === maxLeng - 1) {
        snt = snt + '*\n';
      } else {
        snt = snt + ' ';
      }
    }
    result.push(snt);
  }

  return star + '\n' + result.join('').replace(/[,]/g, '') + star;

}

module.exports = mirror;
