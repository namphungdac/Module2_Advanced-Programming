export class Queue<T> {
    constructor(private QueueArray:T[] = [],
                protected size:number = 0) {
    }
    enqueue(element:T):void {
        this.QueueArray.push(element);
        this.size++;
    }
    dequeue():T {
        this.size--;
        return this.QueueArray.shift();
    }
}