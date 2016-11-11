function trickOrTreat(children,candies){

  if(children !== candies.length) {
    return "Trick or treat!";
  }

  var candyCount = [];

  for(var i = 0; i < candies.length; i++) {
    var count = 0;
    for(var j = 0; j < candies[i].length; j++) {
      if(candies[i][j] === 'candy') {
        count = count + 1;
      } else if(candies[i][j] === 'bomb') {
        return "Trick or treat!";
      }
    }

    if(count < 2) {
      return "Trick or treat!";
    }

    candyCount.push(count);
  }

  if(candyCount.filter(function(a){
    if(candyCount[0] !== a) {
      return true;
    }
  }).length !== 0) {
      return "Trick or treat!";
  }

  return "Thank you, strange uncle!";

}

module.exports = trickOrTreat;
