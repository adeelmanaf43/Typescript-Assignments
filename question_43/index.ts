function show_magicians(magicians: string[]){
    for(let i = 0; i < magicians.length; i++){
        console.log(`Magician: ${magicians[i]}`);
    }
}


let arr = ["Joe", "Joseph", "John", "Eoin"];
show_magicians(arr);



function make_great(magician: string){
    return `Great ${magician}`;
}

let arr2 = []

for(let i = 0; i < arr.length; i++){
    arr2.push(make_great(arr[i]))
}

console.log(`Original Array: ${arr}`);

console.log(`Array for Great Magicians: ${arr2}`);