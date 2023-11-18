

let usernames = ["Adeel", "Aqeel", "Ali", "admin", "Raza"];

usernames = [];

if(usernames.length === 0){
    console.log(`We need to find some users`);
} else {
    for(let name of usernames){
        if (name === "admin"){
            console.log(`Hello ${name}, would you like to see a status report?`)
        } else {
            console.log(`Hello ${name}, thankyou for logging again`);
        }
    }
}