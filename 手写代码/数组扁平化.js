// 根据深度拍平
// const flatten = (arr, deep = 1) => {
//   return arr.reduce((accumulator, currentValue) => {
//     return Array.isArray(currentValue) && deep > 1
//       ? [...accumulator, ...flatten(currentValue, deep - 1)]
//       : [...accumulator, currentValue];
//   }, []);
// };

// 全部拍平
const flatten = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    return Array.isArray(currentValue)
      ? [...accumulator, ...flatten(currentValue)]
      : [...accumulator, currentValue];
  }, []);
};

const arr = [1, [2], [3, [4]]];
console.log(flatten(arr, 1));
console.log(flatten(arr, 2));
console.log(flatten(arr, 3));
