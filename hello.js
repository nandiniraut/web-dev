// this is my first javascript code!
console.log('yes yes yes');

let firstName = 'Nandini';
console.log(firstName);

const interestRate = 0.3;
console.log(interestRate);

let name = 'some name';
let age = 19;
let approval = true;
let lastName;
let selectedColor = null;

let person = {
    personName: 'okay',
    personAge: 30
};
person.personName = "john doe";
person.personAge = 21;
console.log(person.personName);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors[1]);

function greet(nameof){
    console.log('hello ' + nameof);
}
greet("John");

function square(no){
    return no * no;
}

console.log(square(2));