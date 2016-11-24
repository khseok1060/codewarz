function scramble(str1, str2) {

  str1 = str1.split('').sort().join();
  str2 = str2.split('').sort().join();

  if(str1.length !== 0 && str2.length === 0) {
    return true;
  }

  if(str1.length < str2.length) {
    return false;
  } else if(str1.length === str2.length) {
    if(str1 !== str2) {
      return false;
    } else {
      return true;
    }
  }

  for(var i = 0; i < str2.length; i++) {
    if(str1.match(str2[i]) === null) {
      return false;
    }
    str1 = str1.slice(str1.indexOf(str2[i]));
  }

  return true;
  
}

module.exports = scramble;
