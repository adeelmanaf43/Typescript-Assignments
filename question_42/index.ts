
function make_great(magician: string){
    return `Great ${magician}`;
}

function show_magicians(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = make_great(magicians[i]);
        console.log(magicians[i])
    }
}

show_magicians(["Joe", "Joseph", "John", "Eoin"]);




