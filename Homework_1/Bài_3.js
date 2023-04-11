function reverseString(str) {
    let arr = str.split('');
    let arrReverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrReverse.push(arr[i]);
    }
    return arrReverse.join('');
}

let str = '12abcd';
console.log(reverseString(str));