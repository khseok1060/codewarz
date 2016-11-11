var chai = require('chai');
var assert = chai.assert;
var bowlingScore = require('./Bowling_Score_Calculator.js');

describe('5kyu_Bowling Score Calculator', function(){
  it('should return 0', function(){
    assert.equal(bowlingScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);
  });

  it('should return 190', function(){
    assert.equal(bowlingScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]), 190);
  });

  it('should return 300', function(){
    assert.equal(bowlingScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]), 300);
  });

  it('should return 11', function(){
    assert.equal(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]), 11);
  });

  it('should return 12', function(){
    assert.equal(bowlingScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]),12);
  });

});
