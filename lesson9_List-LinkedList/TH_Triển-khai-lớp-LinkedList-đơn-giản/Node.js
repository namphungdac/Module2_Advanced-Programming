"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    Node.prototype.getData = function () {
        return this.data;
    };
    return Node;
}());
exports.Node = Node;
