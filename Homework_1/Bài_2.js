function maxArray(arr1, arr2 , arr3, arr4){
    let arr = [arr1, arr2 , arr3, arr4]
    let arrSum = []
    for(let i = 0; i < arr.length; i ++){
        arrSum.push(arr[i].reduce((sum, a) => sum + a))
    }
    let index = arrSum.indexOf(Math.max(...arrSum));
    return arr[index]
}
let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 5]
let arr3 = [1, 2, 3, 20]
let arr4 = [1, 2, 3, 6]

console.log(maxArray(arr1, arr2 , arr3, arr4))