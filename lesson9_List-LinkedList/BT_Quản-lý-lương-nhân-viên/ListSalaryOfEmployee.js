"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSalaryOfEmployee = void 0;
var SalaryOfEmployee_1 = require("./SalaryOfEmployee");
var ListSalaryOfEmployee = /** @class */ (function () {
    function ListSalaryOfEmployee(head, tail) {
        if (head === void 0) { head = null; }
        if (tail === void 0) { tail = null; }
        this.head = head;
        this.tail = tail;
    }
    ListSalaryOfEmployee.prototype.addFirstEmployee = function (name, month, money) {
        var node = new SalaryOfEmployee_1.SalaryOfEmployee(name, month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };
    ListSalaryOfEmployee.prototype.showListEmployee = function () {
        var ListEmployee = [];
        var currentNode = this.head;
        while (currentNode) {
            ListEmployee.push(currentNode.getInfoEmployee());
            currentNode = currentNode.next;
        }
        return ListEmployee;
    };
    ListSalaryOfEmployee.prototype.sumSalaryOfEmployee = function () {
        return this.showListEmployee().reduce(function (sum, element) {
            return sum + element.money;
        }, 0);
    };
    ListSalaryOfEmployee.prototype.findMaxSalaryMonths = function () {
        var currentNode = this.head;
        var maxSalary = 0;
        while (currentNode) {
            if (currentNode.getMoney() >= maxSalary) {
                maxSalary = currentNode.getMoney();
            }
            currentNode = currentNode.next;
        }
        var ListMaxSalaryMonths = [];
        currentNode = this.head;
        while (currentNode) {
            if (maxSalary === currentNode.getMoney()) {
                ListMaxSalaryMonths.push({ month: currentNode.getMonth(), money: currentNode.getMoney() });
            }
            currentNode = currentNode.next;
        }
        return ListMaxSalaryMonths;
    };
    return ListSalaryOfEmployee;
}());
exports.ListSalaryOfEmployee = ListSalaryOfEmployee;
