function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Magician: ${magicians[i]}`);
    }
}


show_magicians(arr);
function make_great(magician) {
    return `Great ${magician}`;
}
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2.push(make_great(arr[i]));
}
console.log(`Original Array: ${arr}`);
console.log(`Array for Great Magicians: ${arr2}`);
export {};
