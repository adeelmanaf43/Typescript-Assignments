let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let ele of arr) {
    if (ele === 1) {
        console.log(`${ele}st`);
    }
    else if (ele === 2) {
        console.log(`${ele}nd`);
    }
    else if (ele === 3) {
        console.log(`${ele}rd`);
    }
    else {
        console.log(`${ele}th`);
    }
}
export {};
