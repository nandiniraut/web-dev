// take a number call it limit
// display odd or even for each number upto that number

let takennumber = hello (5);
console.log(takennumber);

function hello (limit){
if (limit <= 0)
return "inadmissible";
if (limit ==! 'number')
return NaN;
for (x = limit; x>0; x--){
    if (x % 2 === 0) 
    console.log(x, 'even');
    else
    console.log(x, 'odd');
}

}