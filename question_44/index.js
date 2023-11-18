function make_sandwich(...things) {
    return `I need ${things.join(" ")} in sandwich`;
}
console.log(make_sandwich("cheese", "meat", "densest"));
export {};
