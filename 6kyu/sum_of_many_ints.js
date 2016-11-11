function f(n, m) {

  let sumTotal = 0;
  let lastNumSum = 0;

  let circle = Math.floor(n/m);
  let lastNum = n % m;

  sumTotal = (m-1)*m/2;
  lastNumSum = lastNum*(lastNum+1)/2;

  return (sumTotal*circle)+lastNumSum;
};

module.exports = f;
