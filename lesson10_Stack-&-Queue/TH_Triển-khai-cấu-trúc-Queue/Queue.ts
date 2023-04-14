export class Queue<T> {
    constructor(private array: T[] = [],
                protected size: number = 0) {
    }

    enqueue(element: T): void {
        this.array.push(element);
        this.size++;
    }

    dequeue(): T {
        this.size--;
        return this.array.shift();
    }

    getSize(): number {
        return this.size;
    }

    getArray(): T[] {
        return this.array;
    }
}