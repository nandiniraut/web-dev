primenumber (10);

function primenumber(limit){
for (let number = 2; number <= limit; number++){
    let isprime =  true;
    for (let factor = 2; factor < number; factor++){
        if (number % factor === 0){
        isprime = false;
        break;
    }
}
if(isprime) console.log(number);
}
}