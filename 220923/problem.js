/**
 * Task: rewrite the following function using forEach rather
 * than a for loop.
 * 
 * function flatten(arr) {
 *   arr2 = [];
 *   for (let i = 0; i < arr.length; i++) {
 *     arr2.concat(arr[i]);
 *   }
 *   return arr2;
 * }
 */

function flatten(arr) {
  let arr2 = [];

  // // Solution with an independent function declaration
  // const flattenIt = (element, index, array) => {
  //   arr2 = arr2.concat(element)
  // }
  
  // arr.forEach(flattenIt)
  
  // Solution with an inline anonymous function
  arr.forEach((element, index, array) => {
    // const temp = arr2.concat(element)
    // arr2 = temp

    arr2 = arr2.concat(element)
  })

  return arr2;
}


const array = [[1, 4], [9, 16], [ 0, 2, 3, 5 ]]
const flattened = flatten(array)
console.log("flattened:", flattened);
