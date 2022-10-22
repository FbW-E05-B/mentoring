const myArray = [1, 2, 3, 4, 5, 6, 7]

// .map –> [1, 4, 9, 16, ... 49]

const mappedArray = myArray.map(squareIt)


function squareIt(item, index, array) {
  // console.log("item:", item);
  // console.log("index:", index);
  // console.log("array:", array);
  // console.log("")
  
  if (item % 2) {
    // don't do anything
  } else {
    return item * item
  }
}


const filteredArray = mappedArray.filter(filterIt)

function filterIt(item, index, array) {
  return item !== undefined
}
console.log("myArray:", myArray);
console.log("mappedArray:", mappedArray);
console.log("filteredArray:", filteredArray);

