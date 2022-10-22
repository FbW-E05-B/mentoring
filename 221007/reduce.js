array = [1,2,3,4,5]

// const mapped = array.map(mapper)
// console.log("mapped:", mapped);


const result = array.reduce(reducerFunction, 0)
console.log("result:", result);
console.log("array:", array);

const evenSum =  array.reduce(evenReducerFunction, 0)
console.log("evenSum:", evenSum);
console.log("array:", array);

function mapper(item, index, array) {
  console.log("item:", item, "index:", index, "array:", array);
  
}

function reducerFunction(cumulator, item, index, array) {
  // console.log("cumulator:", cumulator, "item:", item, "index:", index, "array:", array);

  const sum = cumulator + item

  // console.log("sum:", sum);
  

  return sum
}

function evenReducerFunction(valueFromLastCall, item, index, array) {
  // console.log("cumulator:", cumulator, "item:", item, "index:", index, "array:", array);

  if (item % 2) {
    return valueFromLastCall
  }

  const sum = valueFromLastCall + item

  return sum
}