// 1. Write a function that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.


function camelize(str) {
  const array = str.split("-")
  
  const cameled = array.map((word, index) => {
    if (index) {
      return word[0].toUpperCase()+word.slice(1)
    }

    return word
  })
  
  return cameled.join("")
}

const camel = camelize("my-short-string")
console.log("camel:", camel);
