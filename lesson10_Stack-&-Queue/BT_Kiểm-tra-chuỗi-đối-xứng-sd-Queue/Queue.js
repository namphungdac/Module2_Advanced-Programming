"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(QueueArray, size) {
        if (QueueArray === void 0) { QueueArray = []; }
        if (size === void 0) { size = 0; }
        this.QueueArray = QueueArray;
        this.size = size;
    }
    Queue.prototype.enqueue = function (element) {
        this.QueueArray.push(element);
        this.size++;
    };
    Queue.prototype.dequeue = function () {
        this.size--;
        return this.QueueArray.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
