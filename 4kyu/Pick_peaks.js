function pickPeaks(arr){

  var pos = [];
  var peaks = [];

  for(var i = 1; i < arr.length-1; i++) {
    if(arr[i-1] < arr[i]) {
      if(arr[i] > arr[i+1]) {
        pos.push(i);
        peaks.push(arr[i]);
      } else if(arr[i] === arr[i+1]) {
        var index = i;
        
        while(arr[index] === arr[index+1]){
          index++;
        }

        if(arr[index] > arr[index+1]) {
          pos.push(i);
          peaks.push(arr[index]);
        }

        i = index;
      }
    }
  }
  return {pos, peaks};
}

module.exports = pickPeaks;
