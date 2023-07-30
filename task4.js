function calculateFactorial(n) {
  if (typeof n === 'number') {
    if (n === 0) {
      return 1;
    }
    return n * calculateFactorial(n - 1);
  }
  return 'Invalid input';
}

function power(base, exponent) {
  if (typeof base === 'number' && typeof exponent === 'number') {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  return 'Invalid input';
}