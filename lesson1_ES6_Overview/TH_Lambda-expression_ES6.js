let arr1 = [1, 2, 3, 4, 5, 6, 7];
// C1
// let square = (arr) => {
//     let arrResult = [];
//     for(let i of arr) {
//         arrResult.push(i*i);
//     }
//     return arrResult;
// }
// console.log(square(arr1));

// C2
let square = (item) => item*item;
let arrSquare = (arr, func) => {
    let arrResult = [];
    arr.forEach((element) => {
        arrResult.push(func(element))
    });
    return arrResult;
}
console.log(arrSquare(arr1,square));