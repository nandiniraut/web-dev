// divisible by 3, print fizz
// divisible by 5, print buzz
// divisible by both 3 and 5, print fizzbuzz
// not divisible by 3 or 5, print input
// otherwise, not a number

let output = Fizzbuzz(30)
console.log(output);

function Fizzbuzz (number){
    
    if (typeof number ==! 'number')
    return NaN;
    
    if ((number % 3 === 0) && (number % 5 === 0)) 
    return "FizzBuzz";

    if (number % 3 === 0) 
return "Fizz";

if (number % 5 === 0) 
return "Buzz";


else
return number;
// else return "Not a number";
}