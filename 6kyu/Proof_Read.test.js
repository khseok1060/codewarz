var chai = require('chai');
var assert = chai.assert;
var proofread = require('./Proof_Read.js');

describe('6kyu_Proof_Read', function(){

  it('should return "Their deceit was inconceivable. She seized the moment."', function(){
    assert.equal(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."), "Their deceit was inconceivable. She seized the moment.");
  });

  it('should return "His neighbour was overweight."', function(){
    assert.equal(proofread("HIs nieghBOur wAs oVerwieGht."), "His neighbour was overweight.");
  });

  it('should return "She received a peignor."', function(){
    assert.equal(proofread("SHe rEcieveD a pIegNor."), "She received a peignor.");
  });

});
