var chai = require('chai');
var assert = chai.assert;
var persistence = require('./Persistent_Bugger.js')

describe('6kyu_Persistent_Bugger', function () {
  it('should return right value', function(){
    assert.equal(persistence(39),3);
    assert.equal(persistence(4),0);
    assert.equal(persistence(25),2);
    assert.equal(persistence(999),4);
  });
});
