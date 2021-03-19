function createCircle (radius, position){
    return {
        radius,
        position,
        draw(){
    console.log('drawing function');
        },   
    }
}

const circle1 = createCircle(1);
console.log(circle1);
