let array = [31, 1, 19, 63];
let sameElements;
for (let i = 0; i < array.length; i++) {
    if (array[0] === array[i]) {
        sameElements = true
    } else {
        sameElements = false;
    }
}
console.log('${sameElements}')