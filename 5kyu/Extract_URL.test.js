var chai = require('chai');
var assert = chai.assert;
var domainName = require('./Extract_URL.js');

describe('5kyu_Extract the domain name from a URL', function(){
  it('should return google', function(){
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
  });

  it('should return xakep', function(){
    assert.equal(domainName("www.xakep.ru"), "xakep");
  });

  it('should return youtube', function(){
    assert.equal(domainName("https://youtube.com"), "youtube");
  });

});
