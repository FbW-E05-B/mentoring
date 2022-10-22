function myFunction(arr1, arr2) {
  // let arr = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   arr.push([arr1[i], arr2[i]]);
  // }
  // return Object.fromEntries(arr);

  const reducerFunction = (previousValue, item, index) => {
    console.log(index, "previousValue:", previousValue);

    const nextValue = { ...previousValue };
    nextValue[item] = arr2[index];

    return nextValue;
  };

  return arr1.reduce(reducerFunction);
  // return arr1.reduce((a, b, i) => ({ ...a, [b]: arr2[i] }), 0);
}
console.log(myFunction(["a", "b", "c"], [1, 2, 3]));
console.log(myFunction(["w", "x", "y", "z"], [10, 9, 5, 2]));
console.log(myFunction([1, "b"], ["a", 2]));

// function myFunction(a) {
//   let arr = (...a);
//   let st = arr.join("");
//   return st.split("");
// }
// myFunction(10);

// myFunction(931);

// myFunction(193278);

