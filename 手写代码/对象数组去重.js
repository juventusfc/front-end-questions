const uniqBy = (arr, key) => {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
};

const singers = [
  { id: 1, name: "Leslie Cheung" },
  { id: 1, name: "Leslie Cheung" },
  { id: 2, name: "Eason Chan" },
];
console.log(uniqBy(singers, "id"));
