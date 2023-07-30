function createCounter() {
  let count = 0;

  return function counter() {
    count++;
    return count;
  }
}
//for the createCounter function call
const count1 = createCounter();

function repeatFunction (fn, n) {
  if (typeof fn === 'function' && typeof n === 'number') {
    for (let i = 0; i < n; i++) {
      fn();
    }
  }
  return '';
}
//for the repeatFunction function call
function f() {
  console.log('Hello World')
}