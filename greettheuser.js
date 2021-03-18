// if the time is between 6 am and 12 pm, say good morning
// if the time is between 12 pm and 6 pm, say good afternoon
// otherwise, say good evening

let hour = 10;
if (hour >= 6 && hour < 12){
    console.log('Good Morning!');
}

else if (hour >= 12 && hour < 18){
    console.log('Good Morning!');
}

else{
    console.log('Good Evening!');
}