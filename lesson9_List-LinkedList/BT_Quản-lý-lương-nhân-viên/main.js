"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListSalaryOfEmployee_1 = require("./ListSalaryOfEmployee");
var listSalaryOfEmployee = new ListSalaryOfEmployee_1.ListSalaryOfEmployee();
listSalaryOfEmployee.addFirstEmployee("P D Nam", 6, 9);
listSalaryOfEmployee.addFirstEmployee("P D Nam", 5, 13);
listSalaryOfEmployee.addFirstEmployee("P D Nam", 4, 9.5);
listSalaryOfEmployee.addFirstEmployee("P D Nam", 3, 13);
listSalaryOfEmployee.addFirstEmployee("P D Nam", 2, 7);
listSalaryOfEmployee.addFirstEmployee("P D Nam", 1, 7);
console.table(listSalaryOfEmployee.showListEmployee());
console.log("=======================================");
console.log("Sum salary of employee is: ".concat(listSalaryOfEmployee.sumSalaryOfEmployee()));
console.log("=======================================");
console.table(listSalaryOfEmployee.findMaxSalaryMonths());
