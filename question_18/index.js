let favLocations = ['Switzerland', 'Iceland', 'Naran', 'Neelum', 'Makkah'];
console.log(`Array in it's original order`);
console.log(favLocations);
let favLocations2 = [...favLocations];
console.log('Array in alphabetical order');
favLocations2.sort();
console.log(favLocations2);
console.log('Array still in original order');
console.log(favLocations);
favLocations2.reverse();
console.log("Array in reverse order");
console.log(favLocations2);
console.log('Array still in original order');
console.log(favLocations);
let favLocations3 = [];
for (let i = favLocations.length - 1; i >= 0; i--) {
    favLocations3.push(favLocations[i]);
}
console.log("The original array in reverse order");
console.log(favLocations3);
let favLocations4 = [];
for (let i = favLocations.length - 1; i >= 0; i--) {
    favLocations4.push(favLocations[i]);
}
console.log("Reversing array again");
console.log(favLocations4);
console.log("Original array in alphabetical order");
console.log(favLocations.sort());
console.log("Original array in reverse alphabetical order");
console.log(favLocations.reverse());
export {};
