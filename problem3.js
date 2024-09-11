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

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("n9ayeem"));
console.log(checkDigitsInName("e1mu3"));
console.log(checkDigitsInName("Suman"));
console.log(checkDigitsInName("Name2024"));
console.log(checkDigitsInName("!@#"));
console.log(checkDigitsInName(["Raj"]));