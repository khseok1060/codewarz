var chai = require('chai');
var assert = chai.assert;
var reverseWords = require('./Reverse_words.js');

describe('6kyu_Reverse words', function(){
  it('should return sihT si na !elpmaxe', function(){
    assert.equal(reverseWords('This is an example!'), 'sihT si na !elpmaxe');
  });
});
