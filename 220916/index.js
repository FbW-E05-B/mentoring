// Functions
// Loops
// Arrays
// Function with no arguments

// ( round parentheses )
// [ square brackets ]
// { curly braces }

const array = ["Anne", "Bob", "Charlie", "Donna"]
* .length
* .join()
* .push()
* .pop()
* Math.pow() 2^10
* Math.min()
* Math.random()
* Math.floor()
* Operators
// +
/**
 * +
 * -
 * /
 * %
 */

function fun(a = []) { // parameter = a; argument = "something else"
  console.log("a:", a, a.length);

  for (let ii=0; ii<a.length; ii++ ) {
    const word = a[ii]
    console.log(`a[${ii}]:`, word);
    
    for (let jj=0; jj<a.length; jj++ ) {
      console.log(`word[${jj}]:`, word[jj]);     
    }
  }

  const letters = a.join(' ');
  console.log("letters:", `"${letters}"`);

  const b = letters.split(' ') // delimiter = ' '
  console.log("b:", b);
}


const result = fun(array)