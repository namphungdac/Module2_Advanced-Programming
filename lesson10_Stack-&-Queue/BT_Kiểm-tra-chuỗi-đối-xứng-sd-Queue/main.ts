import {Stack} from "./Stack";
import {Queue} from "./Queue";

function checkSymmetry(str: string) {
    let stack = new Stack();
    let queue = new Queue();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
        queue.enqueue(str[i]);
    }
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
        if (stack.pop() !== queue.dequeue()) count++;
    }
    if (count === 0) {
        return `String is symmetry`;
    } else return `String is not symmetry`;
}

console.log(checkSymmetry("able was I ere I saw elba"));
console.log(checkSymmetry("able was I ere I saw elba 1"));