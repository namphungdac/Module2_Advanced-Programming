import {Queue} from "./Queue";

let queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.getArray());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.getArray());
console.log(queue.getSize());
