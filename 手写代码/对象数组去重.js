const uniqBy = (arr, key) => {
  let newArry = arr.map((item) => [item[key], item]);
  let arrMap = new Map(newArry);
  return [...arrMap.values()];
};

const singers = [
  { id: 1, name: "Leslie Cheung" },
  { id: 1, name: "Leslie Cheung" },
  { id: 2, name: "Eason Chan" },
];
console.log(uniqBy(singers, "id"));
