var chai = require('chai');
var assert = chai.assert;
var orderWeight = require('./Weight_for_weight.js');

describe('5kyu_Weight for weight', function(){
  it('should return 2000 103 123 4444 99',function(){
    assert.equal(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99");
  });

  it('should return 11 11 2000 10003 22 123 1234000 44444444 9999',function(){
    assert.equal(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999");
  });

});
