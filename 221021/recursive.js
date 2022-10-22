
const numbers = [2, 3, 4]
const letters = ["a", "b", "c"]
const nestedObject = {
  numbers,
  letters
}


function getNestedValue(object, path) {
  // ["numbers", 0] –> 2

  // console.log("object:", object);
  // console.log("path:", path);
  
  if (path.length && typeof object === "object") {
    const accessor = path.shift()
    // Call this same function with new arguments
    return getNestedValue(object[accessor], path)

  } else {
    return object
  }
}

const path = ["numbers", 0]
const value = getNestedValue(nestedObject, path)


console.log("value:", value);
