const currying = (fn) =>
  (_curry = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...newArgs) => _curry(...args, ...newArgs));

const sum = (a, b, c) => a + b + c;

console.log(currying(sum)(1, 2)(3));
