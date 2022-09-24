/**
 * 1. Compare for loops with the .forEach Array method
 * 2. The .filter Array method
 * 3. The .map Array method
 */


const array = [1,2,3,4]

// // A basic for loop
// for ( let ii = 0; ii < array.length; ii += 1 ) {
//   const number = array[ii]
//   const power = number ** 2
//   array[ii] = power
// }


// The same functionality with Array.forEach()
array.forEach(powerFunction)

function powerFunction(item, index, passedArray) {
  passedArray[index] = item ** 2

  // console.log("index:", index);
  // console.log("item:", item);
  // console.log("passedArray:", passedArray);
  // console.log("")
}

console.log("array:", array);



// The .filter Array method takes a function as an
// argument and iterates through the items in the
// array, applying the function to each in turn.
// It returns a new array.
// If the output of the function is truthy for a
// given item, that item is added to the output array.
// If the output of the function is falsy, the item
// is omitted from the output array
const filtered = array.filter(onlyOdd)

function onlyEven(item, index, passedArray) {
  const valueToReturn = !(item % 2) // true if even
  return valueToReturn
}

function onlyOdd(item, index, passedArray) {
  const valueToReturn = (item % 2) // true if odd
  return valueToReturn
}

console.log("filtered:", filtered);

// The array that .filter() is applied to is unchanged.
console.log("array:", array);
console.log("")
console.log("")



// Like .filter, the .map Array method takes a function
// as an argument and iterates through the items in the
// array, applying the function to each in turn.
// It returns a new array.
// The output array will have as many items as the source
// array. Each item in the output array will be the value
// returned by the function.
const mapped = array.map(mapFunction)

function mapFunction(item) {
  // console.log("index:", index);
  // console.log("item:", item);
  // console.log("passedArray:", passedArray);
  // console.log("")

  // const power = Math.pow(item, index)
  // return power

  return -item
}

console.log("mapped:", mapped);
console.log("array:", array);