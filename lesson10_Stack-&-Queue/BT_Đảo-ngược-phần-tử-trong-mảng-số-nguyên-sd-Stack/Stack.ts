export class Stack<T> {
    constructor(private StackArray: T[] = []) {
    }

    push(element: T): void {
        this.StackArray.push(element);
    }

    pop(): T {
        return this.StackArray.pop();
    }
}