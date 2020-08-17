const sum = (a, b) => {
  console.log(a + b);
};

let sumDelay = throttle(sum, 1000);
sumDelay(1, 1);
sumDelay(2, 2);
sumDelay(3, 3);
sumDelay(4, 4);

setTimeout(() => sumDelay(5, 5), 2000);
