"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScore = void 0;
var StudentScore = /** @class */ (function () {
    function StudentScore(name, score, next) {
        if (next === void 0) { next = null; }
        this.name = name;
        this.score = score;
        this.next = next;
    }
    StudentScore.prototype.getName = function () {
        return this.name;
    };
    StudentScore.prototype.getScore = function () {
        return this.score;
    };
    StudentScore.prototype.getInfoStudent = function () {
        return { name: this.name, score: this.score };
    };
    return StudentScore;
}());
exports.StudentScore = StudentScore;
