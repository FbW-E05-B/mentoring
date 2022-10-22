const words = ["WORD", "WARD", "CARD", "CARE", "WORK", "CORK", "CORE", "CORD"]
// WORD > WORK > CORK > CORE > CORD > CARD > CARE


const output = {
  WORD: ["WARD", "WORK"],
  WARD: ["CARD"]
  // , ...
}

const chains = {}

words.forEach((word, index) => {

let nearWords = []

  word = word.split("")
  // console.log("word:", word);
  
  for ( let ii = index + 1; ii < words.length; ii += 1 ) {
    const other = words[ii]
    let counter = 0
    // console.log("ii:", ii, other);

    word.forEach((char, index) => {
      // console.log("char:", char, other[index]);
      if (char === other[index]) {
        // console.log("char:", char);
      } else {
        // console.log("Not equal")
        counter ++
      }
    })

    // console.log("counter:", counter);
    if (counter === 1){
      nearWords.push(other)
    }
  }

  console.log("nearWords:", nearWords);
  chains[word.join("")] = nearWords
  
  
  console.log("")
})


console.log("chains:", chains);
