export class Node<T> {

    constructor(private data:T,
                public next:Node<T> | null = null) {
    }
    getData():T {
        return this.data;
    }
}