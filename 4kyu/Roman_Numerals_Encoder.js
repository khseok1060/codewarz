function solution(number){
  var result = '';

  //thousand
  while(number >= 1000) {
    result = result + 'M';
    number = number - 1000;
  }

  console.log(number);

  if(Math.floor(number/100) === 9) {
    result = result + 'CM';
    number = number - 900;
  } else if(Math.floor(number/100) === 8) {
    result = result + 'CCM';
    number = number - 800;
  } else if(Math.floor(number/100) === 7) {
    result = result + 'DCC';
    number = number - 700;
  } else if(Math.floor(number/100) === 6) {
    result = result + 'DC';
    number = number - 600;
  } else if(Math.floor(number/100) === 5) {
    result = result + 'D';
    number = number - 500;
  } else if(Math.floor(number/100) === 4) {
    result = result + 'CD';
    number = number - 400;
  } else if(Math.floor(number/100) === 3) {
    result = result + 'CCD';
    number = number - 300;
  } else if(Math.floor(number/100) === 2) {
    result = result + 'CC';
    number = number - 200;
  } else if(Math.floor(number/100) === 1) {
    result = result + 'C';
    number = number - 100;
  }

  if(Math.floor(number/10) === 9) {
    result = result + 'XC';
    number = number - 90;
  } else if(Math.floor(number/10) === 8) {
    result = result + 'XXC';
    number = number - 80;
  } else if(Math.floor(number/10) === 7) {
    result = result + 'LXX';
    number = number - 70;
  } else if(Math.floor(number/10) === 6) {
    result = result + 'LX';
    number = number - 60;
  } else if(Math.floor(number/10) === 5) {
    result = result + 'L';
    number = number - 50;
  } else if(Math.floor(number/10) === 4) {
    result = result + 'XL';
    number = number - 40;
  } else if(Math.floor(number/10) === 3) {
    result = result + 'XXL';
    number = number - 30;
  } else if(Math.floor(number/10) === 2) {
    result = result + 'XX';
    number = number - 20;
  } else if(Math.floor(number/10) === 1) {
    result = result + 'X';
    number = number - 10;
  }

  if(number === 9) {
    result = result + 'XI';
  } else if(number === 8) {
    result = result + 'VIII';
  } else if(number === 7) {
    result = result + 'VII';
  } else if(number === 6) {
    result = result + 'VI';
  } else if(number === 5) {
    result = result + 'V';
  } else if(number === 4) {
    result = result + 'IV';
  } else if(number === 3) {
    result = result + 'III';
  } else if(number === 2) {
    result = result + 'II';
  } else if(number === 1) {
    result = result + 'I';
  }



  console.log(number);
  console.log(result);

  return result;
}

module.exports = solution;
