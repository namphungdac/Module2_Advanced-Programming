"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data, right, left) {
        if (right === void 0) { right = null; }
        if (left === void 0) { left = null; }
        this.data = data;
        this.right = right;
        this.left = left;
    }
    return Node;
}());
exports.Node = Node;
