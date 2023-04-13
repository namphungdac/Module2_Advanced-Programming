"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryOfEmployee = void 0;
var SalaryOfEmployee = /** @class */ (function () {
    function SalaryOfEmployee(name, month, money, next) {
        if (next === void 0) { next = null; }
        this.name = name;
        this.month = month;
        this.money = money;
        this.next = next;
    }
    SalaryOfEmployee.prototype.getName = function () {
        return this.name;
    };
    SalaryOfEmployee.prototype.getMonth = function () {
        return this.month;
    };
    SalaryOfEmployee.prototype.getMoney = function () {
        return this.money;
    };
    SalaryOfEmployee.prototype.getInfoEmployee = function () {
        return { name: this.name, month: this.month, money: this.money };
    };
    return SalaryOfEmployee;
}());
exports.SalaryOfEmployee = SalaryOfEmployee;
