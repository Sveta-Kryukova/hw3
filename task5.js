function lazyMap(arr, fn) {
  if (Array.isArray(arr) && typeof fn === 'function') {
    return arr.map((item) => fn(item));
  }
  return 'Invalid input';
}

function fibonacciGenerator() {
  let previous = 0;
  let current = 1;
  const cache = [previous, current];

  return function getNextFibonacci() {
    const next = previous + current;
    previous = current;
    current = next;

    if (cache.length > current) {
      return cache[current];
    }

    cache.push(current);
    console.log(cache)

    return current;
  };
}
//for the fibonacciGenerator function call
const getNextFibonacciNumber = fibonacciGenerator();

console.log(getNextFibonacciNumber());
console.log(getNextFibonacciNumber());
console.log(getNextFibonacciNumber());
console.log(getNextFibonacciNumber());
console.log(getNextFibonacciNumber());
