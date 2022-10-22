
const numbers = [2, 3, 4]
const letters = ["a", "b", "c"]
const nestedArray = [numbers, letters]

console.log(nestedArray);
console.log("nestedArray[0]:", nestedArray[0]); // [2, 3, 4]
console.log("nestedArray[1]:", nestedArray[1]); // ["a", "b", "c"]
console.log([nestedArray[0][2], nestedArray[1][2]]);

const object = {
  key: "value",
  prop: "info"
}

console.log("(Object.entries(object):", Object.entries(object));


console.log("Object.assign:", Object.assign({}, {"this":"that"}, object));
