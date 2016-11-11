var expect = require("chai").expect;
var assert = require("chai").assert;
var count = require('./count_characters_in_your_string.js');
require("chai").should();

describe('6kyu_count_characters_in_your_string', function(){
  it('Empty string should return {}', function(){
    assert.equal(count(''), {});
  });

  it('Should return right object',function(){
    assert.equal(count('aba'),{'a':2, 'b':1})
  })

});
