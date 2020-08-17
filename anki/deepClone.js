const avatar = {
  site: "www.google.com",
  age: 10086,
};

const grades = ["good", "very good"];

const obj = {
  name: "frank",
  grades,
  avatar,
};

const anotherObj = deepClone(obj);

avatar.age = 0;
grades.push("sad");

console.log(JSON.stringify(obj));
console.log(JSON.stringify(anotherObj));
