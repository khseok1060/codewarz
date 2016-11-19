function revrot(str, sz) {
    if(str.length < sz || str.length === 0 || sz === 0) {
      return "";
    }

    var limit = Math.floor(str.length/sz);
    var start = 0;
    var result = [];

    for(let i = 0; i < limit; i++) {
      var strSlice = str.slice(start, start+sz);
      let sum = 0;
      for(let j = 0; j < strSlice.length; j++) {
        sum = sum + Number(strSlice[j]);
      }

      if(sum%2 === 0) {
        result.push(strSlice.split('').reverse().join(''));
      } else {
        result.push(strSlice.slice(1,strSlice.length) + strSlice[0]);
      }
      start = start + sz;
    }

    return result.join('');

}

module.exports = revrot;
