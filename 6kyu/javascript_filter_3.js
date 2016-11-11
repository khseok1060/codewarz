function searchNames( logins ){
  if(logins.length === 0) {
    return [];
  }

  var dotFilter = function(str) {
    if(str[0] === '.' || str[str.length-1] === '.') {
      return true;
    }
  }

  var filteredArr = logins.filter(dotFilter);

  var indexCollector = [];

  for(var i=0; i<filteredArr.length; i++) {
    indexCollector.push(logins.indexOf(filteredArr[i]));
  }

  var result = [];

  for(var i=0; i<indexCollector.length; i++) {
    result.push(logins[indexCollector[i]+1])
  }

  return result;

}

module.exports = searchNames;
