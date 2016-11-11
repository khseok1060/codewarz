function checkAvailability(schedule, currentTime) {
  var scheduleArray = [];
  var currentTimeArr = currentTime.split(':').join().replace(',', '');

  for(var i = 0; i < schedule.length; i++) {
    for(var j = 0; j < schedule[i].length; j++) {
      scheduleArray.push(schedule[i][j].split(':').join().replace(',', ''));
    }
  }

  if(Number(scheduleArray[0]) > Number(currentTimeArr) || Number(scheduleArray[3]) <= Number(currentTimeArr)){
    return true;
  }

  if(Number(currentTimeArr) >= Number(scheduleArray[0]) && Number(currentTimeArr) <= Number(scheduleArray[1])) {
    return schedule[0][1];
  } else if(Number(currentTimeArr) <= Number(scheduleArray[3]) && Number(currentTimeArr) >= Number(scheduleArray[2])){
    return schedule[1][1];
  }

  return true;
}

module.exports = checkAvailability;
