const myArray = [1, 2, 3, 4, 5, 6, 7]

// .map –> [1, 4, 9, 16, ... 49]

const filteredArray = myArray.filter(filterIt)

function filterIt(item, index, array) {
  return (item % 2 === 0) // boolean
}

const mappedArray = filteredArray.map(squareIt)


function squareIt(item, index, array) {
  return item * item
}
console.log("myArray:", myArray);
console.log("filteredArray:", filteredArray);
console.log("mappedArray:", mappedArray);


const allAtOnce = myArray.filter(filterIt).map(squareIt)

console.log("allAtOnce:", allAtOnce);

const oneLiner = myArray.filter(item => item % 2 === 0).map(item => item * item)

console.log("oneLiner:", oneLiner);
