"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScoreList = void 0;
var StudentScore_1 = require("./StudentScore");
var StudentScoreList = /** @class */ (function () {
    function StudentScoreList(head, tail, size) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        if (size === void 0) { size = 0; }
        this.head = head;
        this.tail = tail;
        this.size = size;
    }
    StudentScoreList.prototype.insertFirst = function (name, score) {
        var node = new StudentScore_1.StudentScore(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    StudentScoreList.prototype.insertLast = function (name, score) {
        var node = new StudentScore_1.StudentScore(name, score);
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var node_1 = new StudentScore_1.StudentScore(name, score);
            this.tail.next = node_1;
            this.tail = node_1;
        }
        this.size--;
    };
    StudentScoreList.prototype.showList = function () {
        var listStudentScore = [];
        var currentNode = this.head;
        while (currentNode) {
            listStudentScore.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return listStudentScore;
    };
    StudentScoreList.prototype.totalStudentsFail = function () {
        var ListStudentFail = [];
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.getScore() <= 5)
                ListStudentFail.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return ListStudentFail;
    };
    StudentScoreList.prototype.listStudentMaxScore = function () {
        var ListStudentExcellent = [];
        var currentNode = this.head;
        var ListScore = [];
        // return this.showList().reduce((sum,element) => {
        //     return sum + element.score;
        // }, 0);
        this.showList().forEach(function (element) { return ListScore.push(element.score); });
        var scoreMax = Math.max.apply(Math, ListScore);
        while (currentNode) {
            if (currentNode.getScore() === scoreMax)
                ListStudentExcellent.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return ListStudentExcellent;
    };
    StudentScoreList.prototype.findByName = function (nameOfStudent) {
        var ListStudentByName = [];
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.getName() === nameOfStudent)
                ListStudentByName.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return ListStudentByName;
    };
    return StudentScoreList;
}());
exports.StudentScoreList = StudentScoreList;
