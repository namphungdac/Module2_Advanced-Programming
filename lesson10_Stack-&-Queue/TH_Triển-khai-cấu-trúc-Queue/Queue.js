"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(array, size) {
        if (array === void 0) { array = []; }
        if (size === void 0) { size = 0; }
        this.array = array;
        this.size = size;
    }
    Queue.prototype.enqueue = function (element) {
        this.array.push(element);
        this.size++;
    };
    Queue.prototype.dequeue = function () {
        this.size--;
        return this.array.shift();
    };
    Queue.prototype.getSize = function () {
        return this.size;
    };
    Queue.prototype.getArray = function () {
        return this.array;
    };
    return Queue;
}());
exports.Queue = Queue;
