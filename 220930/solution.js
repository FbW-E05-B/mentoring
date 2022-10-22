const person = {
  name: "Corey Mason",
  gender: "Female",
  height: 168,
  citizenship: "Germany",
  'eye colour': "brown",
  printValues: function() { 
    console.log(`${this.name} is a citizen of ${this.citizenship}. They are ${this.gender}, ${this.height}cm tall and have ${this['eye colour']} eyes.`)
  }
};


for (key in person) {
  console.log(`person.${key} : ${person[key]}`);
}


const getValues = (object) => Object.values(object)

// console.log(`${person.name} is a citizen of ${person.citizenship}. They are ${person.gender}, ${person.height}cm tall and have ${person['eye colour']} eyes.`)
person.printValues()
