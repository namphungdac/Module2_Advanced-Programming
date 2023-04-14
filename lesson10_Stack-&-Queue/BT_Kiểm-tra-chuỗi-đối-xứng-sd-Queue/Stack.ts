export class Stack<T> {
    constructor(private StackArray:T[] = [],
                protected size:number = 0) {
    }
    push(element:T):void {
        this.StackArray.push(element);
        this.size++;
    }
    pop():T {
        this.size--;
        return this.StackArray.pop();
    }
}