"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(StackArray, size) {
        if (StackArray === void 0) { StackArray = []; }
        if (size === void 0) { size = 0; }
        this.StackArray = StackArray;
        this.size = size;
    }
    Stack.prototype.push = function (element) {
        this.StackArray.push(element);
        this.size++;
    };
    Stack.prototype.pop = function () {
        this.size--;
        return this.StackArray.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
