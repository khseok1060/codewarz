var chai = require('chai');
var assert = chai.assert;
var f = require('./sum_of_many_ints.js');

describe('Sum of Many Ints',function(){
  it('Should return 20', function(){
    assert.equal(f(10, 5), 20);
  });

  it('Should return 190', function(){
    assert.equal(f(20, 20), 190);
  });
  it('Should return 60', function(){
    assert.equal(f(15, 10), 60);
  });
});
