const words = ["WORD", "WARD", "CARD", "CARE", "WORK", "CORK", "CORE", "CORD"]
// WORD > WORK > CORK > CORE > CORD > CARD > CARE


// const output = {
//   WORD: ["WARD", "WORK"],
//   WARD: ["CARD"]
//   // , ...
// }

const chains = {}

words.forEach((word, index) => {

  let nearWords = chains[word] || (chains[word] = [])

  word = word.split("")  
  for ( let ii = index + 1; ii < words.length; ii += 1 ) {
    const other = words[ii]
    const otherWords = chains[other] || (chains[other] = [])
    let counter = 0

    word.forEach((char, index) => {
      if (char !== other[index]) {
        counter ++
      }
    })

    if (counter === 1){
      nearWords.push(other)
      otherWords.push(word.join(""))
    }
  }
  
  console.log("")
})


console.log("chains:", chains);
