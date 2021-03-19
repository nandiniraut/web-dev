// first calculate the average of the grades
// if average is between 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [95, 90, 90];
console.log(grade(marks));

function grade(marks){
    const avg = calculateaverage (marks);
    if (avg < 60) return("F");
 if (avg < 70) return("D");
 if (avg < 80) return("C");
 if (avg < 90) return("B");
return("A");
    }
 
function calculateaverage (array){
    let sum = 0;
    for(let obj in array) {
        sum += obj;
        let avg = sum / array.length;
        return array;
}

}