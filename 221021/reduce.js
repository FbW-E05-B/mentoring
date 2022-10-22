const myArray = [
  { quantity: 1, price: 3.45, name: "shoe" },
  { quantity: 2, price: 2.45, name: "bag" }, 
  { quantity: 3, price: 1.45, name: "tie" }, 
  { quantity: 4, price: 7.45, name: "dress" }, 
  { quantity: 5, price: 8.45, name: "sneakers" }, 
  { quantity: 6, price: 9.45, name: "hat" }, 
  { quantity: 7, price: 6.45, name: "coat" }
]

// 28

const initial = 0
const totalquantitys = myArray.reduce(
  reduceIt,
  { receipt: "", total: 0 }
)

function reduceIt(previous, item, index, array) {
  // console.log("previous:", previous);
  // console.log("item:", item);
  // console.log("index:", index);
  // console.log("")


  const costForThisItem = item.quantity * item.price

  const lineItem = `
  ${item.quantity} x ${item.name} @ ${item.price} = ${costForThisItem}`

  previous.receipt += lineItem
  previous.total += costForThisItem
  
  return previous
}

console.log("totalquantitys:", totalquantitys);
