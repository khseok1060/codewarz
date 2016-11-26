var chai = require('chai');
var assert = chai.assert;
var solution = require('./Roman_Numerals_Encoder.js');

describe('4kyu_Roman_Numerals_Encoder', function(){
  it('should return M', function(){
    assert.equal(solution(1000), 'M');
  });

  it('should return MCMXC', function(){
    assert.equal(solution(1990), 'MCMXC');
  });

  it('should return MMVIII', function(){
    assert.equal(solution(2008), 'MMVIII');
  });

});
