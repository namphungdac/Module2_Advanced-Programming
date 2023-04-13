"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList(head, tail, size) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        if (size === void 0) { size = 0; }
        this.head = head;
        this.tail = tail;
        this.size = size;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.readLinkedList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode.getData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
