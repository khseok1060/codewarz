var bowlingScore = function(rolls) {

  let result = 0;
  let frame = 1;
  let start = 0;

  while(frame !== 10) {
    if(rolls[start] + rolls[start + 1] + rolls[start + 2] === 30) {
      result = result + 30;
      start++;
    } else if(rolls[start] + rolls[start + 1] === 20){
      result = result + 20 + rolls[start + 2] + rolls[start + 3];
      start++;
    } else if(rolls[start] === 10) {
      result = result + 10 + rolls[start + 1] + rolls[start + 2];
      start++;
    } else {
      if(rolls[start] + rolls[start + 1] === 10) {
        result = result + 10 + rolls[start + 2];
        start = start + 2;
      } else {
        result = result + rolls[start] + rolls[start + 1];
        start = start + 2;
      }
    }
    frame++;
  }

  //Last frame

  for(var i = start; i < rolls.length ; i++) {
   if(rolls[start-1] === 10) {
     result = result + rolls[i];
   } else {
     result = result + rolls[i];
   }
  }
  return result;
}

module.exports = bowlingScore;
