let guestList = ["Adeel", "Aqeel", "Ali"];
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
console.log(`${guestList[1]} can't make it to the dinner`);
guestList[1] = "Asif";
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
console.log("Guys, I found bigger table");
guestList.unshift("Saqib");
guestList.splice(2, 0, "Sameer");
guestList.push("Sabir");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
console.log("Sorry, guys I can invite only two people");
for (let i = 0; i < 4; i++) {
    console.log(`Sorry ${guestList.pop()}, I can't invite you to dinner`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hey ${guestList[i]}, I am inviting you on dinner`);
}
guestList.pop();
guestList.pop();
console.log(guestList);
export {};
