function Result(arr, n) {
    let new_arr = [];
    for (let i = 0; i < arr.length; i += n) {
        new_arr.push(arr.slice(i, i + n));
    }
    return new_arr;
}
let arr = [1, 2, 3, 4, 5];
let n = 2;
console.log(Result(arr, n));
