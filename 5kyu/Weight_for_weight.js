function orderWeight(string) {
    var weightArray = string.split(' ');

    for(var j=0; j<weightArray.length; j++) {
      for(var k=0; k<weightArray.length; k++) {
        if(digitSum(weightArray[k]) > digitSum(weightArray[k+1])) {
          var min = weightArray[k+1];
          weightArray[k+1] = weightArray[k];
          weightArray[k] = min;
        } else if(digitSum(weightArray[k]) === digitSum(weightArray[k+1])) {
          if(weightArray[k] > weightArray[k+1]){
            var min = weightArray[k+1];
            weightArray[k+1] = weightArray[k];
            weightArray[k] = min;
          }
        }
      }
    }

    function digitSum(digit) {
      var result = 0;
      var digit = digit + '';
      for(var i = 0; i < digit.length; i++) {
        result = result + Number(digit[i]);
      }
      return result;
    }

    return weightArray.join(' ');
}

module.exports = orderWeight;
