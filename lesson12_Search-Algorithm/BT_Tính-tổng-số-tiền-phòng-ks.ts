function sum(array: number[][]): number {
    let sum: number = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (i === 0) {
                if (array[i][j]) sum += array[i][j];
            } else {
                if (array[i][j] && array[i - 1][j]) sum += array[i][j];
            }
        }
    }
    return sum;
}

let array = [[0, 1, 1, 0], [0, 5, 0, 2], [2, 0, 3, 3]];
let result = sum(array);
console.log(`The cost is: ${result}`);