"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree(roof, size) {
        if (roof === void 0) { roof = null; }
        if (size === void 0) { size = 0; }
        this.roof = roof;
        this.size = size;
    }
    Tree.prototype.insertNode = function (node) {
        if (!this.roof) {
            this.roof = node;
        }
        else {
            var currentNode = this.roof;
            while (currentNode) {
                if (node.data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (node.data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
        this.size++;
    };
    Tree.prototype.deleteNode = function (data) {
        var currentNode = this.roof;
        var previousNode = currentNode;
        while (currentNode.data !== data) {
            previousNode = currentNode;
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        var tempNode = currentNode;
        if (currentNode.left == null && currentNode.right == null) {
            if (previousNode.left === currentNode) {
                previousNode.left = null;
            }
            else if (previousNode.right === currentNode) {
                previousNode.right = null;
            }
            currentNode = null;
        }
        else if (currentNode.left) {
            var preNode = currentNode;
            currentNode = currentNode.left;
            if (currentNode.right) {
                while (currentNode.right) {
                    preNode = currentNode;
                    currentNode = currentNode.right;
                }
                tempNode.data = currentNode.data;
                preNode.right = currentNode.left;
                currentNode = null;
            }
            else {
                tempNode.data = currentNode.data;
                tempNode.left = currentNode.left;
                currentNode = null;
            }
        }
        else if (currentNode.left === null && currentNode.right !== null) {
            var preNode = currentNode;
            currentNode = currentNode.right;
            if (currentNode.left) {
                while (currentNode.left) {
                    preNode = currentNode;
                    currentNode = currentNode.left;
                }
                tempNode.data = currentNode.data;
                preNode.left = currentNode.right;
                currentNode = null;
            }
            else {
                tempNode.data = currentNode.data;
                tempNode.right = currentNode.right;
                currentNode = null;
            }
        }
        this.size--;
    };
    return Tree;
}());
exports.Tree = Tree;
