"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPatient = void 0;
var ListPatient = /** @class */ (function () {
    function ListPatient(ListUnexaminedPatients, ListExaminedPatients, size) {
        if (ListUnexaminedPatients === void 0) { ListUnexaminedPatients = []; }
        if (ListExaminedPatients === void 0) { ListExaminedPatients = []; }
        if (size === void 0) { size = 0; }
        this.ListUnexaminedPatients = ListUnexaminedPatients;
        this.ListExaminedPatients = ListExaminedPatients;
        this.size = size;
    }
    ListPatient.prototype.enqueue = function (patient) {
        this.ListUnexaminedPatients.push(patient);
        this.size++;
    };
    ListPatient.prototype.sortListUnexaminedPatients = function () {
        this.ListUnexaminedPatients.sort(function (a, b) { return a.getCode() - b.getCode(); });
    };
    ListPatient.prototype.dequeue = function () {
        this.size--;
        this.ListUnexaminedPatients[0].setCondition("Examined");
        var examinedPatient = this.ListUnexaminedPatients.shift();
        this.ListExaminedPatients.push(examinedPatient);
        return examinedPatient;
    };
    ListPatient.prototype.examinedPatient = function () {
        return "M\u1EDDi ".concat(this.dequeue().showPatient(), " v\u00E0o kh\u00E1m");
    };
    ListPatient.prototype.examinedNextPatient = function () {
        return "M\u1EDDi ".concat(this.ListUnexaminedPatients[0].showPatient(), " chu\u1EA9n b\u1ECB");
    };
    ListPatient.prototype.getListUnexaminedPatients = function () {
        return this.ListUnexaminedPatients;
    };
    ListPatient.prototype.getListExaminedPatients = function () {
        return this.ListExaminedPatients;
    };
    return ListPatient;
}());
exports.ListPatient = ListPatient;
