// Ternary operator
// Remove item from an array

// const x = <expression> ? <true_value> : <false_value>

const month = "APRIL"
const daysInMonth = ["april", "june", "september", "november"].indexOf(month.toLowerCase() > -1)
// const daysInMonth = ["april", "june", "september", "november"].includes(month.toLowerCase())
                  ? 30 // output if true
                  
                  // : 31
                  : (month.toLowerCase() === "february") // expression which returns true or false
                    ? 28 // output if true
                    : 31 // output if false
console.log("daysInMonth:", daysInMonth);



const age = "11"
const school = (age < 6)
               ? "Kindergarten"
               : (age < 19)
                 ? "School"
                 : "University"
console.log("school:", school);

let education
if (age < 6) {
  education = "Kindergarten"
} else if (age < 19) {
  education = "School"
} else {
  education = "University"
}

console.log("education:", education);


