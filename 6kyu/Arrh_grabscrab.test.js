var chai = require('chai');
var assert = chai.assert;
var grabscrab = require('./Arrh_grabscrab.js');

describe('6kyu_Arrh! grabscrab', function(){
  it("Should have found 'first'", function(){
    assert.equal(grabscrab("trisf", ["first"]), ["first"]);
  });
  it("Should not have found anything", function(){
    assert.equal(grabscrab("oob", ["bob", "baobab"]), []);
  });
  it("Should have found 'mountains'", function(){
    assert.equal(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]), ["mountains"]);
  });
  it("Should have found 'pool' and 'loop'", function(){
    assert.equal(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]), ["pool", "loop"]);
  });
  it("Should have found 'sport' and 'ports'", function(){
    assert.equal(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]), ["sport", "ports"]);
  });
  it("Should not have found anything", function(){
    assert.equal(grabscrab("ourf", ["one","two","three"]), []);
  });
});
