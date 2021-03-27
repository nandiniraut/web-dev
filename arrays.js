let numbers = [ 3, 4]
numbers.push(5);
numbers.unshift(1,2);
numbers.splice(2, 1, 'a', 'b');
console.log(numbers);
console.log(numbers.indexOf (2));
console.log(numbers.includes(1));
const helu = numbers.pop();
console.log(helu);
console.log(numbers);


let courses = [
    {name: 'a', contentlength: 2},
    {name: 'b', contentlength: 4},
    {name: 'c', contentlength: 6}
]

const course = courses.find(course => course.name === 'a')

console.log(course);
