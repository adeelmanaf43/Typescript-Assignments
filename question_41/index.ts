
function show_magicians(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(`Magician: ${magicians[i]}`);
    }
}

show_magicians(["Joe", "Joseph", "John", "Eoin"]);