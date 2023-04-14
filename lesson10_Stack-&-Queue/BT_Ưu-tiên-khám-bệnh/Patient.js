"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code, condition) {
        if (condition === void 0) { condition = "Unexamined"; }
        this.name = name;
        this.code = code;
        this.condition = condition;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.getCode = function () {
        return this.code;
    };
    Patient.prototype.setCondition = function (value) {
        this.condition = value;
    };
    Patient.prototype.getCondition = function () {
        return this.condition;
    };
    Patient.prototype.showPatient = function () {
        return "b\u1EC7nh nh\u00E2n:".concat(this.name, " c\u00F3 m\u00E3 ").concat(this.code);
    };
    return Patient;
}());
exports.Patient = Patient;
