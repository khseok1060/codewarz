var chai = require('chai');
var assert = chai.assert;
var even_or_odd = require('./even_or_odd.js');

describe('Even or Odd', function(){
  it('should return Even', function(){
    assert.equal(even_or_odd(2), "Even");
    assert.equal(even_or_odd(0), "Even");
  });

  it('should return Odd', function(){
    assert.equal(even_or_odd(7), "Odd");
    assert.equal(even_or_odd(1), "Odd");
  });
});
