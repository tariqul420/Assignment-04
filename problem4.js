function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return "Invalid Input"
    }
    if(typeof obj.name === "string" && typeof obj.testScore === "number" && typeof obj.schoolGrade === "number" && typeof obj.isFFamily === "boolean" && obj.schoolGrade <= 30 && obj.testScore <= 50){
        let grade = obj.testScore + obj.schoolGrade;
        if(obj.isFFamily === true){
            grade += 20;
        }
        
        return grade >= 80 ? true : false;
    }
    else{
        return false
    }
}


console.log(calculateFinalScore({ name: "Rajib", testScore: 51,  schoolGrade: 31, isFFamily : true  }));

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 31, isFFamily : false }));

console.log(calculateFinalScore("hello"));

console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }));