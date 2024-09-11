function  waitingTime(waitingTimes  , serialNumber) {
    if(Array.isArray(waitingTimes) === false || typeof serialNumber !== "number"){
        return "Invalid Input"
    }

    if(waitingTimes.length < serialNumber){
        let sum = 0;
        for(const time of waitingTimes){
        sum += time;
        }
        const avgTime = Math.round(sum / waitingTimes.length)
        const personSiNo = serialNumber - 1;
        const personSiBefore = personSiNo - waitingTimes.length;
        return personSiBefore * avgTime;
    }else{
        return "Invalid Input";
    }
}


console.log(waitingTime([ 3, 5, 7, 11, 6 ], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log(waitingTime([7, 8, 3, 4, 5], 6));