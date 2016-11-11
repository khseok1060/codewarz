var chai = require('chai');
var assert = chai.assert;
var trickOrTreat = require('./Halloween_trick_or_treat.js');

describe('6kyu_Halloween: trick or treat', function(){
  it('should return "Thank you, strange uncle!"', function(){
    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy"]])
, "Thank you, strange uncle!");
  });

  it('should return "Trick or treat!"', function(){
    assert.equal(trickOrTreat(3,[["candy","apple"],["apple","candy"],["candy","apple"]])
    , "Trick or treat!");
    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","candy","candy"]])
    , "Trick or treat!");
    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"],["candy","bomb","candy"]])
    , "Trick or treat!");
  });

  it('children !== candies.length should return "Trick or treat!"', function(){
    assert.equal(trickOrTreat(3,[["candy","apple","candy"],["candy","candy"]])
    , "Trick or treat!");
  })



});
