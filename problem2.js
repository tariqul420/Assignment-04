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

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));