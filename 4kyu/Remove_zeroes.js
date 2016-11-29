function removeZeros(array) {
  let count = 0;

  for (let i=0; i < array.length-count; i++) {

    if (array[i] === 0) {
      for (let j=i; j < array.length; j++) {
        array[j] = array[j+1];
      }
      array[array.length-1] = 0;
      count++;
      i--;
    } else if (array[i] === '0') {
      for (let k=i; k<array.length; k++) {
        array[k] = array[k+1];
      }
      array[array.length-1] = '0';
      count++;
      i--;
    }
  }
  return array;
}

module.exports = removeZeros;
