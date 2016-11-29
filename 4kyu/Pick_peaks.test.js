var chai = require('chai');
var assert = chai.assert;
var pickPeaks = require('./Pick_peaks.js');

//this test cannot judge failure or success.
describe('4kyu_Pick peaks', function(){
  it('should return {pos:[3,7],peaks:[6,3]}', function(){
    assert.equal(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]),{pos:[3,7],peaks:[6,3]});
  });
});
