let picture = isLandscape (10, 9)
console.log (picture);

function isLandscape(width, height){
    return (width>height) ? 'landscape' : 'potrait'; 
}