var chai = require('chai');
var assert = chai.assert;
var getAge = require('./Calculate_age_in_years.js');

describe('5kyu_Calculate age in years', function(){

  it('should return 36', function(){
    assert.equal(getAge(new Date('1980/01/01')), 36);
  });

  it('should return 100', function(){
    assert.equal(getAge(new Date('1913/01/01'), new Date('2013/01/01')), 100);
  });

  it('should return 24', function(){
    assert.equal(getAge(new Date('2008/02/29'), new Date('2032/03/01')), 24);
  });

  it('should return -8', function(){
    assert.equal(getAge(new Date('2008/01/01'), new Date('2000/01/01')), -8);
  });

});
