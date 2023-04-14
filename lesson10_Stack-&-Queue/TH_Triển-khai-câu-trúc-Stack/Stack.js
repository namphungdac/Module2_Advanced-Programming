"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(size) {
        if (size === void 0) { size = 0; }
        this.size = size;
        this.array = [];
    }
    Stack.prototype.push = function (element) {
        this.array.push(element);
        this.size++;
    };
    Stack.prototype.pop = function () {
        this.size--;
        return this.array.pop();
    };
    Stack.prototype.getSize = function () {
        return this.size;
    };
    Stack.prototype.getArray = function () {
        return this.array;
    };
    return Stack;
}());
exports.Stack = Stack;
