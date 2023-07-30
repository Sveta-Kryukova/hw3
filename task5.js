function lazyMap(arr, fn) {
  if (Array.isArray(arr) && typeof fn === 'function') {
    return arr.map((item) => fn(item));
  }
  return 'Invalid input';
}

function* fibonacciGenerator() {
  let previous = 0;
  let current = 1;

  while (true) {
    let next = previous + current;
    previous = current;
    current = next;
    yield current;
  }
}
//for the fibonacciGenerator function call
let fib = fibonacciGenerator();