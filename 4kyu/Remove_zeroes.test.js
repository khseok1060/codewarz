var chai = require('chai');
var assert = chai.assert;
var removeZeros = require('./Remove_zeroes.js');

describe('4kyu_Remove Zeroes', function(){
  it('should return right answer', function(){
    var input = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14],
        solution = [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0];
    assert.equal(JSON.stringify(removeZeros(input)), JSON.stringify(solution));
  });
});
