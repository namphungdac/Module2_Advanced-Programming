"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
function checkSymmetry(str) {
    var stack = new Stack_1.Stack();
    var queue = new Queue_1.Queue();
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);
        queue.enqueue(str[i]);
    }
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (stack.pop() !== queue.dequeue())
            count++;
    }
    if (count === 0) {
        return "String is symmetry";
    }
    else
        return "String is not symmetry";
}
console.log(checkSymmetry("able was I ere I saw elba"));
console.log(checkSymmetry("able was I ere I saw elba 1"));
