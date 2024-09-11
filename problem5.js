function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) === false || typeof serialNumber !== "number"){
        return "Invalid Input"
    }

    let sum = 0;
    for(const time of waitingTimes){
        sum += time;
    }
    const avgTime = sum / waitingTimes.length;
}


console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log(waitingTime("[6,2]", 9));