let guestList = ["Adeel", "Aqeel", "Ali"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
console.log(`${guestList[1]} can't make it to the dinner`);
guestList[1] = "Asif";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
export {};
