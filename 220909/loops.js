array = [1,2,3,4]

for (
let ii = 0;
  ii < array.length;
  ii++
) {
  console.log(`array[${ii}]`, array[ii])
}

array.forEach( item => console.log(item))