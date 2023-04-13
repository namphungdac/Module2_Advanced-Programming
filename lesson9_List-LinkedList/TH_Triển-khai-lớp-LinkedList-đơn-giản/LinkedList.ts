import {Node} from "./Node";

export class LinkedList<T> {
    constructor(protected head: Node<T> | null = null,
                protected tail: Node<T> | null = null,
                protected size: number = 0) {
    }

    insertFirstNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLastNode(data:T):void {
        if (!this.head) {
            this.insertFirstNode(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }

    getSize():number {
        return this.size;
    }

    readLinkedList():T[] {
        let listData = [];
        let currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.getData());
            currentNode = currentNode.next;
        }
        return listData;
    }
}