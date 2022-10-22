const a = "A"
const key = "value"


const obj = {
  key,
  a: (a, "B", 1),
  myFunction
}


// Functions that occur later are 'hoisted'. They are
// loaded into the computer's RAM space before any
// other code is executed.
function myFunction () {
  return "something"
}

// Arrow function are variables. They are not hoisted.
function myArrowFunction = () => {
  return "something"
}

console.log("obj:", obj);
console.log("a:", a);

