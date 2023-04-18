import {Node} from "./Node";

export class Tree<T> {
    constructor(public roof:Node<T>|null = null,
                protected size:number = 0) {
    }

    insertNode(node:Node<T>):void {
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

    deleteNode(data:T):void {
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
        if(currentNode.left == null && currentNode.right == null) {
            if (previousNode.left === currentNode){
                previousNode.left =null;
            } else if (previousNode.right === currentNode) {
                previousNode.right =null;
            }
            currentNode = null;
        }else if (currentNode.left) {
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
            while (currentNode.left) {
                preNode = currentNode;
                currentNode = currentNode.left;
            }
            tempNode.data = currentNode.data;
            preNode.left = currentNode.right;
            currentNode = null;
        }
        this.size--;
    }
}