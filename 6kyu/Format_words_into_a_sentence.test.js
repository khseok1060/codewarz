var chai = require('chai');
var assert = chai.assert;
var formatWords = require('./Format_words_into_a_sentence.js');

describe('6kyu_Format words into a sentence', function(){
  it('should return one, two, three and four', function(){
    assert.equal(formatWords(['one', 'two', 'three', 'four']), 'one, two, three and four');
  });

  it('should return empty string', function(){
    assert.equal(formatWords(null), '');
    assert.equal(formatWords(['']), '');
  });

  it('should return one', function(){
    assert.equal(formatWords(['', '', 'one']), 'one');
  });
});
