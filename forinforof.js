// using for in to iterate over attributes of object
// using for of loops to iterate in arrays
 

const Person= {
    Name: 'Hui',
    Age: 18
}

for (let key in Person)
console.log(key, Person[key]);

let colors= ['red', 'blue', 'green', 'purple', 'black']

for (let color of colors)
console.log(color);