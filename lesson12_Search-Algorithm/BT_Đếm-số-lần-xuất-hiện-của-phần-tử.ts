function countOccurrencesOfNumberInArray(array: number[], number: number): number {
    let count: number = 0;
    array.forEach((element => {
        if (number === element) count++;
    }));
    return count;
}

let array = [3, 1, 2, 5, 3];
let number = 3;
let result = countOccurrencesOfNumberInArray(array, number);
console.log(`Element ${number} occurrences ${result} times in the array`);