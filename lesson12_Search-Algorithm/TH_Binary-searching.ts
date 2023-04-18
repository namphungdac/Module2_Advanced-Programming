function findFirstOccurrence(array:number[], number:number):number {
    let low = 0;
    let high = array.length -1;
    let result:number = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (number === array[mid]) {
            result = mid;
            high = mid -1; // search first occurrence of number
            // low = mid +1; search last occurrence of number
        } else if (number < array[mid]) {
            high = mid - 1;
        } else {
            low = mid +1;
        }
    }
    return result;
}

let array = [1,3,5,6,6,6,8,10,11];
let number = 6;
let index = findFirstOccurrence(array,number);
if (index === -1) {
    console.log(`Element ${number} dose not exis in the array`);
} else {
    console.log(`Element ${number} exis first at ${index} position in the array`);
}
