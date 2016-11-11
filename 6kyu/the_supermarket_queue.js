function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  } else if (n >= customers.length) {
    return Math.max( ...customers );
  } else if(n === 1) {
    return customers.reduce(function(a,b){return a+b;});
  } else {
    var tillSum = [];

    for(var i=0; i<n; i++) {
      tillSum.push(customers[i]);
    }

    for(var j=n; j<customers.length; j++) {
      var minimumIndex = tillSum.indexOf(Math.min( ...tillSum ));
      tillSum[minimumIndex] = tillSum[minimumIndex] + customers[j];
    }

    return Math.max( ...tillSum );
  }
}

module.exports = queueTime;
