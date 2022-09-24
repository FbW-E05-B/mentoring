/**
 * If an array contains nested arrays, you can
 * use .forEach on the array itself and on its
 * nested arrays.
 */

const array = [[1,2],[3,4]]

// console.log("array[0]:", array[0]);
// console.log("array[1]:", array[1]);


array.forEach((item, index, array) => {
  console.log("index:", index, "item:", item);
  
  item.forEach((item2, index2, array) => {
    console.log("inner index2:", index2, item2);
  })
})