let make_shirt = (size = "Large", message = "I Love Typescript") => {
    console.log(`The size of shirt: ${size}, The message is: ${message}`);
};
make_shirt();
make_shirt("medium");
make_shirt("small", "Typescript is type oriented language");
export {};
