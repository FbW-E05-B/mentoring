const keysAndValues = ["key", "value", "count", 3]

// { key: "value", count: 3 }

const reducedObject = keysAndValues.reduce(myFunction, {})
console.log("reducedObject:", reducedObject);



function myFunction(valueFromLastTime, item, index, array) {
  if (!(index % 2)) {
    return valueFromLastTime
  }

  const key = array[index - 1]
  valueFromLastTime[key] = item

  return valueFromLastTime
}


const keyValueArrays = [["key", "value"], ["count", 3], ["candidate", "Diouani"]]
// { key: "value", count: 3 , candidate: "Diouani"}