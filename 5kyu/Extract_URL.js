function domainName(url){
  if(url.match('www.')) {
    return domainFinder('www.');
  } else {
    if(url.match('http://')) {
      return domainFinder('http://');
    } else if(url.match('https://')){
      return domainFinder('https://');
    } else {
      dotIndex = url.indexOf('.');
      return url.slice(0, dotIndex);
    }
  }

  function domainFinder(front) {
    var wwwIndex = url.indexOf(front);
    wwwIndex = wwwIndex + front.length;
    url = url.slice(wwwIndex);
    dotIndex = url.indexOf('.');
    return url.slice(0, dotIndex);
  }

}

module.exports = domainName;
