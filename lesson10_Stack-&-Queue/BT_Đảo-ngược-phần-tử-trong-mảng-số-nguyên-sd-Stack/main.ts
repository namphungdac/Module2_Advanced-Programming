import {Stack} from "./Stack";

function reverseArray(array: number[]) {
    let stackArray = new Stack<number>();
    array.forEach((element => stackArray.push(element)));
    for (let i = 0; i < array.length; i++) {
        array[i] = stackArray.pop();
    }
    return array;
}

let array = [1, 2, 3, 4];
console.log(reverseArray(array));