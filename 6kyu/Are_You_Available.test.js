var chai = require('chai');
var assert = chai.assert;
var checkAvailability = require('./Are_You_Available.js');

describe('6kyu_Are You Available?', function(){
  it('should return 10:15',function(){
    assert.equal(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "10:00"), '10:15');
  });

  it('should return true', function(){
    assert.equal(checkAvailability([["09:30", "10:15"], ["12:20", "15:50"]], "11:00"), true);
  });
});
