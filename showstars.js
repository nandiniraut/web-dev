showStars (5);

function showStars (rows){
for (let row = 0; row <= rows; row++){
    let pattern = '';
    for (let i = 1; i <= row; i++ ){
        pattern += '*';
    }
    console.log(pattern);
}
}