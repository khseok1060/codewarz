var chai = require('chai');
var assert = chai.assert;
var combineStrings = require('./Interlace_an_arbitrary_Number_of_Strings.js');

describe('6kyu_Interlace an arbitrary Number of Strings', function(){
  it('sholud return a1b2c3', function(){
    assert.equal(combineStrings('abc', '123'), 'a1b2c3');
  });

  it('sholud return a1b2c3d', function(){
    assert.equal(combineStrings('abcd', '123'), 'a1b2c3d');
  });

  it('sholud return a1£b2$c3%d', function(){
    assert.equal(combineStrings('abcd', '123', '£$%'), 'a1£b2$c3%d');
  });
});
