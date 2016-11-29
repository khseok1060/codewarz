function getAge(birthDate, nowDate) {

  if(nowDate === undefined) {
    nowDate = new Date();
  }

  var birthYear = birthDate.getFullYear();
  var nowYear = nowDate.getFullYear();

  var result = nowYear - birthYear;

  if(birthDate.getMonth() > nowDate.getMonth()) {
    result = result - 1;
  } else if (birthDate.getMonth() === nowDate.getMonth() && birthDate.getDate() > nowDate.getDate()) {
    result = result - 1;
  }

  return result;
    
}

module.exports = getAge;
