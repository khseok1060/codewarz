var chai = require('chai');
var assert = chai.assert;
var javascript_filter_3 = require('./javascript_filter_3.js');

describe('6kyu_Javascript Filter 3',function(){
  it('Should return ["bar@bar.com"]', function(){
    assert.equal(javascript_filter_3([ "foo", "foo@foo.com", "bar.", "bar@bar.com" ]), ['bar@bar.com']);
  })
})
