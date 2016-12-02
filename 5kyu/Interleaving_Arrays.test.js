var chai = require('chai');
var assert = chai.assert;
var interleave = require('./Interleaving_Arrays.js');

describe('5kyu_Interleaving Arrays', function(){
  
  it('should return [1, "c", 2, "d", 3, "e"]', function(){
    assert.equal(interleave([1, 2, 3], ['c', 'd', 'e']), [1, 'c', 2, 'd', 3, 'e']);
  });

  it('should return [1,4,2,5,3,null]', function(){
    assert.equal(interleave([1, 2, 3], [4, 5]), [1,4,2,5,3,null]);
  });

  it('should return [1, 4, 7, 2, 5, 8, 3, 6, 9]', function(){
    assert.equal(interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]), [1, 4, 7, 2, 5, 8, 3, 6, 9]);
  });

});
