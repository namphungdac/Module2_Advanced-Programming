export class Node<T> {
    constructor(public data: T,
                public right: Node<T> | null = null,
                public left: Node<T> | null = null) {
    }
}