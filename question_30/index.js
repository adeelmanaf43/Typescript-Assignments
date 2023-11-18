let usernames = ["Adeel", "Aqeel", "Ali", "admin", "Raza"];
for (let name of usernames) {
    if (name === "admin") {
        console.log(`Hello ${name}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${name}, thankyou for logging again`);
    }
}
export {};
