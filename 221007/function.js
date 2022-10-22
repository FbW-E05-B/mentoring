// const testArray = [1,2,3,4,5]
// const mapped = testArray.map(fn => fn * 2)
// console.log("mapped:", mapped);

// this | .bind()

// ... destructuring
// ... rest parameter

function findMaxIn(array) {
  return Math.max(...array)
}

function findMinIn(array) {
  return Math.min(...array) // array > individual elements`
}

const myFunctions = [
  findMaxIn,
  findMinIn
]

// // ... rest parameter 
// function createAnArrayFromArguments(...args) {
//   return args
// }

console.log("findMaxIn([9,45,23]):", findMaxIn([9,45,23]));

// console.log("createAnArrayFromArguments(8,7,6,23):", createAnArrayFromArguments(8,7,6,23));

const testArray = [9,45,23]
myFunctions.forEach(eachFunction)

function eachFunction(fn, index, array) {
  console.log("typeof fn:", typeof fn, fn);
  console.log("fn(testArray):", fn(testArray));
}