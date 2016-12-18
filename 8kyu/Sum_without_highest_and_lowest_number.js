function sumArray(array) {

  if(array === null) {
    return 0;
  }

  var arraySort = array.sort(function(a,b){return a-b}).slice(1, array.length-1);

  if(arraySort.length === 0 || arraySort.length === 1) {
    return 0;
  }

  return arraySort.reduce(function(a,b){return a+b;})

}

module.exports = sumArray;
