var chai = require('chai');
var assert = chai.assert;
var sumArray = require('./Sum_without_highest_and_lowest_number.js');

describe('8kyu_Sum_without_highest_and_lowest_number', function(){
  it('should return 16', function(){
    assert.equal(sumArray([ 6, 2, 1, 8, 10 ]), 16);
  });
});
