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

function find(list, f) {
  return list.filter(f)[0];
}

function deepClone(obj, cache = []) {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, (c) => c.original === obj);
  if (hit) {
    return hit.copy;
  }

  const copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy,
  });
  Object.keys(obj).forEach((key) => (copy[key] = deepClone(obj[key], cache)));

  return copy;
}

const anotherObj = deepClone(obj);

avatar.age = 0;
grades.push("sad");

console.log(JSON.stringify(obj));
console.log(JSON.stringify(anotherObj));
