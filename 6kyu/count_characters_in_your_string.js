function count (string) {
  let result = {};
  let str = string.slice('');

  if(str.length === 0) {
      return {};
  }

  for(let i = 0; i < str.length; i++) {
    if(result[str[i]] === undefined) {
      result[str[i]] = 1;
    } else {
      result[str[i]] = result[str[i]] + 1;
    }
  }

  return result;
}

module.exports = count;
