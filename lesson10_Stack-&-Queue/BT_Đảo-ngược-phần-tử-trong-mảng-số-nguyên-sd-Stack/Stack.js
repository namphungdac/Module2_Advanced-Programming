"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(StackArray) {
        if (StackArray === void 0) { StackArray = []; }
        this.StackArray = StackArray;
    }
    Stack.prototype.push = function (element) {
        this.StackArray.push(element);
    };
    Stack.prototype.pop = function () {
        return this.StackArray.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
