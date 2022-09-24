const array = ["april", "june", "september", "november", "Julember"]

// .slice
// .splice
// .pop
// .shift

// An array is an address in the computers RAM
// Setting a variable to an array = copying the address
// Slicing an array = creating a new address with the same data

const result = array.splice(1,2, "Christmas", "Hannukah", "New Year")
console.log("array.splice() result:", result);
console.log("array:", array);
array.push("december")

// console.log("result:", result);
// console.log("array:", array);


