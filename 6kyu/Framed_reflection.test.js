var chai = require('chai');
var assert = chai.assert;
var mirror = require('./Framed_reflection.js');

describe('6kyu_Framed reflection', function(){
  it('should return right answer', function(){
    assert.equal(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
    assert.equal(mirror('Codewars'), '************\n* srawedoC *\n************');
  });
});
