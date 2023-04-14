"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
function reverseArray(array) {
    var stackArray = new Stack_1.Stack();
    array.forEach((function (element) { return stackArray.push(element); }));
    for (var i = 0; i < array.length; i++) {
        array[i] = stackArray.pop();
    }
    return array;
}
var array = [1, 2, 3, 4];
console.log(reverseArray(array));
