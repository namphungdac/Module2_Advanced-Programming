export class Stack<T> {
    array: T[] = [];

    constructor(protected size: number = 0) {
    }

    push(element: T): void {
        this.array.push(element);
        this.size++;
    }

    pop(): T {
        this.size--;
        return this.array.pop();
    }

    getSize(): number {
        return this.size;
    }

    getArray():T[] {
        return this.array;
    }
}