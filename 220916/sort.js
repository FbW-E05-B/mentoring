// const array = ["Anne", "Bob", "Charlie", "Donna", "Elizabeth"]

// function sortByLength(a, b, c) {
//   const length1 = a.length
//   const length2 = b.length
//   const criterion = length1 - length2

//   return criterion
// }


// const result = array.sort(sortByLength)
// console.log("result:", result);


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const lengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// ["February",
// "April", "June", "November",  "September",
// "August","December", "January", "July", "March", "May", "October"]

function specialSort(month1, month2) {
  const index1 = months.indexOf(month1)
  const index2 = months.indexOf(month2)
  const days1 = lengths[index1]
  const days2 = lengths[index2]

  let criterion = days1 - days2

  if (criterion === 0) {
    criterion = (month1 < month2)
              ? -1
              : 1
  }

  return criterion
}


const specialMonths = months.sort(specialSort)
console.log("specialMonths:", specialMonths);
