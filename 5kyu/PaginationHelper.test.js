var chai = require('chai');
var assert = chai.assert;
var PaginationHelper = require('./PaginationHelper.js');

describe('5kyu_PaginationHelper', function(){

  var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

  it('returns the number of items within the entire collection', function(){
    assert.equal(helper.itemCount(), 6);
  });

  it('returns the number of pages', function(){
    assert.equal(helper.pageCount(), 2);
  })

  it('returns the number of items on the current page. page_index is zero based.', function(){
    assert.equal(helper.pageItemCount(0), 4);
    assert.equal(helper.pageItemCount(1), 2);
    assert.equal(helper.pageItemCount(2), -1);
  });


  it('pageIndex takes an item index and returns the page that it belongs on', function(){
    assert.equal(helper.pageIndex(5), 1);
    assert.equal(helper.pageIndex(2), 0);
    assert.equal(helper.pageIndex(20), -1);
    assert.equal(helper.pageIndex(-10), -1);
  });
});
