// // speed limit 70, ok
// // every 5 more, 1 point
// // 12 points, license suspended

// let speed = checkspeed(200);
// console.log(speed);

// function checkspeed(x){
//     if (typeof x ==! 'number')
//     return NaN;

//     if (x <= 74) 
//     return "ok";
    
//     if (x > 74){
//         if (x >= 75 && x < 80) return "point = 1";
//         if (x >= 80 && x < 85) return "point = 2";
//         if (x >= 85 && x < 90) return "point = 3";
//         if (x >= 90 && x < 95) return "point = 4";
//         if (x >= 95 && x < 100) return "point = 5";
//         if (x >= 100 && x < 105) return "point = 6";
//         if (x >= 105 && x < 110) return "point = 7";
//         if (x >= 110 && x < 115) return "point = 8";
//         if (x >= 115 && x < 120) return "point = 9";
//         if (x >= 120 && x < 125) return "point = 10";
//         if (x >= 125 && x < 130) return "point = 11";
//         if (x >= 130 && x <= 135) return "point = 12";   
//         if (x > 135) return "license suspended";   
     
    

//     }
// }

console.log(checkSpeed (72));

function checkSpeed (speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit + kmPerPoint)
    return "ok";
        const points = Math.floor((speed - speedLimit) / 5);
        if (points < 12)
        return ("points", points) ;
        else 
        return "License Suspended";

}