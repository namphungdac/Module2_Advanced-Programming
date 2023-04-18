import {Node} from "./Node";

export class Tree<T> {
    constructor(public roof: Node<T> | null = null,
                protected size: number = 0) {
    }

    insertNode(node: Node<T>): void {
        if (!this.roof) {
            this.roof = node;
        } else {
            let currentNode = this.roof;
            while (currentNode) {
                if (node.data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                } else if (node.data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        this.size++;
    }

    deleteNode(data: T): void {
        let currentNode = this.roof;
        let previousNode = currentNode;
        while (currentNode.data !== data) {
            previousNode = currentNode;
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        let tempNode = currentNode;
        if (currentNode.left == null && currentNode.right == null) {
            if (previousNode.left === currentNode) {
                previousNode.left = null;
            } else if (previousNode.right === currentNode) {
                previousNode.right = null;
            }
            currentNode = null;
        } else if (currentNode.left) {
            let preNode = currentNode;
            currentNode = currentNode.left
            if (currentNode.right) {
                while (currentNode.right) {
                    preNode = currentNode;
                    currentNode = currentNode.right;
                }
                tempNode.data = currentNode.data;
                preNode.right = currentNode.left;
                currentNode = null;
            } else {
                tempNode.data = currentNode.data;
                tempNode.left = currentNode.left;
                currentNode = null;
            }
        } else if (currentNode.left === null && currentNode.right !== null) {
            let preNode = currentNode;
            currentNode = currentNode.right;
            if (currentNode.left) {
                while (currentNode.left) {
                    preNode = currentNode;
                    currentNode = currentNode.left;
                }
                tempNode.data = currentNode.data;
                preNode.left = currentNode.right;
                currentNode = null;
            } else {
                tempNode.data = currentNode.data;
                tempNode.right = currentNode.right;
                currentNode = null;
            }
        }
        this.size--;
    }

    PreorderTraversal(node: Node<T> | null): void {
        if (node) {
            console.log(node.data);
            this.PreorderTraversal(node.left);
            this.PreorderTraversal(node.right);
        }
    }

    InorderTraversal(node: Node<T> | null): void {
        if (node) {
            this.InorderTraversal(node.left);
            console.log(node.data);
            this.InorderTraversal(node.right);
        }
    }

    PostorderTraversal(node: Node<T> | null): void {
        if (node) {
            this.PostorderTraversal(node.left);
            this.PostorderTraversal(node.right);
            console.log(node.data);
        }
    }
}