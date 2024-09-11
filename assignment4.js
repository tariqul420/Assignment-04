
// ? Problem no1
function calculateTax(income, expenses) {
    if(income <= 0 || expenses <= 0 || income < expenses){
        return  "Invalid Input";
    }

    const difference = income - expenses;
    const tax = difference * 0.2;
    return tax;
}

//? problem no2
function sendNotification(email) {
    if(!email.includes("@")){
        return "Invalid Email";
    }

    const usernameDomainName = email.split("@");
    const username = usernameDomainName[0];
    const domainName = usernameDomainName[1];
    const output = username + " sent you an email from " + domainName;
    return output;
}

//? problem no3
function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    }

    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    for(const number of numbers){
        if(name.includes(number)){
            return true
        }
    }
    return false;
}

//? problem no4
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
}