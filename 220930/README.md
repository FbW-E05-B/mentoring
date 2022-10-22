# Objects: Part 1
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)

[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#-results)

[![Status overview badge](../../blob/badges/.github/badges/autograding/badge.svg)](#-results)


Please print each of your answers to the console.

**1. Object Person.**
Create an object named `person`. It has total 5 properties: name, gender, height, citizenship, and eye colour. Loop through the object and print both the property and value of the object as shown below: 

* Example:
```javascript
person.name : Corey Mason
person.gender : Female
person.height : 168
person.citizenship : Germany
person.eye colour : brown
```

**2. Get Values.** 
Create a function named `getValues` that returns an array of all **values** of an object's properties. 

* Examples:
```javascript
getValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output: 
```javascript
["tea", "coffee", "milk"] 
```

**3. Add A Method.**
 Add a method to the object `person` from task 1 which prints the values of the objects in a string as below:
 
 * Example of Expected Output 
 "Corey Mason is a citizen of Germany. They are Female, 168cm tall and have brown eyes."
 
 
**4. Convert keys and values into an array.** 
Create a function called `getKeyValuePairs` that converts an object into an array of keys and values. 

* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
* Expected output: 
```javascript
[["A", 1], ["B", 2], ["C", 3]]
```

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
* Expected output: 
```javascript
[["cats", 1], ["dogs", 2], ["turtles", 4]] 
```

**5. List Properties.**
Create a function named `getProperties` that returns an array of **properties** of a javascript object. 
* Example
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
```
* Expected output: 
```javascript
["name", "class", "course"]
```

**6. Merge.**
Create a function named `mergeObjects` that takes two objects as its parameters and merges them together into a new object. 
* Example
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
```

## Bonus Questions

**Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers.

**4. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
* Expected Output: 
```javascript
{John: "name", teacher: "job"} 
```

**5. Return Keys and Values.**
Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

* Examples:
```javascript
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]]
```

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Objects Part 1

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | 1. Object Person. Create an object named person. Loop through the object and print both the property and value of the object. |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | 2. Get Values. Create a function that returns an array of all values of an object's properties. |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | 3. Add A Method. Create an object and add a method to that object which prints the values of the objects in a string. |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | 4. Convert keys and values into an array. Create a function that converts an object into an array of keys and values. |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | 5. List Properties. Create a function that returns an array of properties of a javascript object. |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | 6. Merge. Create a function that takes two objects as its parameters and merges them together into a new object. |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-objects-pt1)


[//]: # (autograding info end)