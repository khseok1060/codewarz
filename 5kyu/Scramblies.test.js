var chai = require('chai');
var assert = chai.assert;
var scramble = require('./Scramblies.js');

describe('5kyu_Scramblies', function(){
  it('should return false', function(){
    assert.equal(scramble('katas','steak'),false);
    assert.equal(scramble('jscripts','javascript'),false);
    assert.equal(scramble('scriptjavx','javascript'),false);
  });

  it('should return true', function(){
    assert.equal(scramble('rkqodlw','world'),true);
    assert.equal(scramble('cedewaraaossoqqyt','codewars'),true);
    assert.equal(scramble('scriptjava','javascript'),true);
    assert.equal(scramble('scriptingjava','javascript'),true);
    assert.equal(scramble('scriptsjava','javascripts'),true);
    assert.equal(scramble('aabbcamaomsccdd','commas'),true);
  });

});
