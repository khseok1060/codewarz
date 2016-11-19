var chai = require('chai');
var assert = chai.assert;
var revrot = require('./Reverse_or_rotate.js');

describe('6kyu_Reverse or rotate', function(){
  it('should return empty string', function(){
    assert.equal(revrot("1234", 0), "");
    assert.equal(revrot("", 0), "");
    assert.equal(revrot("1234", 5), "");
  });

  it('should return 330479108928157', function(){
    s = "733049910872815764"
    assert.equal(revrot(s, 5), "330479108928157");
  });
});
