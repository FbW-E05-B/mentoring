function digitsCount(num){
  num = Math.abs(num)
  
  if ( num < 10) {
    return 1
  } else {
    num = parseInt(num / 10)
    // 4666 –> 466
    return digitsCount(num) + 1
  }
}

// result = digitsCount(4666) //➞ 4
// console.log("result:", result);

const testValues = [
  [ 4666, 4 ],
  [ 544, 3 ],
  [ 121317, 6 ]
]


testValues.forEach(([ number, expected ]) => {
  const result = digitsCount(number)
  const success = result === expected
  console.log("number:", number, success);
})
// digitsCount(0) ➞ 1
// digitsCount(12345) ➞ 5
// digitsCount(1289396387328L) ➞ 13

const edabitTests = {
  number: [ 
  0, 4666, 544, 121317, 12345, 1289396387328, -1232323, 
  3463463874638476, -231.2e6, 1283939312321, -231273683, 
  3.2e6, 314890e3 
],
  expected: [1, 4, 3, 6, 5, 13, 7, 16, 9, 13, 9, 7, 9]
}
