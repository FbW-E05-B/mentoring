/**
 * Array methods like .push(), .reverse(), .join() are all part
 * of the Array.prototype object.
 * 
 * Every array is an object, and so you can add your own methods
 * to custom arrays.
 * 
 * You must use a `function declaration` (not
 * a fat arrow function) to do this; the reserved `this` keyword
 * can then be used to refer to the array itself.
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */



// Create an instance of an Array
const array = [5,4,3,2,1]


// Add a custom `sum` function as a property of this instance
array.sum = function sum() {
  return this.reduce((total, item) => total + item, 0)
}

const total = array.sum()
console.log("total:", total);


// Add a custom `log` function as a property of this instance
array.log = function log() {
  console.log("array.log:\n", this)
}

array.log()


/** If you use a fat arrow function, `this` refer to an
 *  empty global object, not to the array, so your function
 *  will not work as expected.
 */

array.fatArrowFunctionFails = () => {
  console.log("fatArrow functions have no access to the array through `this`:", this)
}

array.fatArrowFunctionFails()


// Methods added to Array.prototype are not shown when
// you console.log() an array. When array.proto_log is
// called, only the custom methods added to the array
// _instance_ will be shown.

/** WARNING // DON'T DO THIS // WARNING // DON'T DO THIS **/

Array.prototype.proto_log = function proto_log() {
  console.log("proto_log:\n", this)
}

array.proto_log()

/** IT IS NOT GOOD PRACTICE TO ADD METHODS TO THE
 *  PROTOTYPE OF A JAVASCRIPT OBJECT, EVEN THOUGH
 *  YOU CAN.
 * 
 *  https://flaviocopes.com/javascript-why-not-modify-object-prototype/
 */
