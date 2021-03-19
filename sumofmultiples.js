console.log(sum(10));

function sum(num){ 
    let sum = 0;
  for (let i = num; i > 0; i--){
if (i % 3 === 0 || i % 5 === 0)
// console.log(i);
sum += i;
  }
  return(sum);
}