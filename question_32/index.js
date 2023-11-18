let current_users = ["Adeel", "Ali", "Aqeel", "Asif", "Joseph"];
let new_users = ["Joe", "Joseph", "John", "Asif", "Eoin"];
for (let i = 0; i < new_users.length; i++) {
    if (current_users.indexOf(new_users[i]) === -1) {
        console.log(`The username ${new_users[i]} is available`);
    }
    else {
        console.log(`The username ${new_users[1]} has already been used`);
    }
}
export {};
