/**
 * Arrays (and all objects) define an address in the computer's
 * RAM space where data is stored. If two variables refer to
 * the same array, changing the contents of the array using
 * one variable means that the other variable will reflect
 * the same change.
 * 
 * Metaphor: each variable is a doorway into the same room.
 * If you change what's in the room, you can see the new
 * contents from both doorways.
 */

const array1 = [5,4,3,2,1]
const array2 = array1 // array2 refers to the same memory address


console.log("Before array1.push(0) - array1:", array1);
console.log("Before array1.push(0) - array2:", array2);
console.log("")

array1.push(0) // change the array using one variable

// Both variables will "see" the changed content
console.log("After array1.push(0) - array1:", array1);
console.log("After array1.push(0) - array2:", array2);
