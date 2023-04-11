import {Employee} from "./Employee";

export class EmployeeManager {
    static EmployeeList: Employee[] = [];

    constructor() {
    }

    static addEmployee(employee: Employee) {
        this.EmployeeList.push(employee);
    }

    // static findIndex(ID: string):number {
    //     let i: number = 0;
    //     this.EmployeeList.forEach((employee: Employee, index) => {
    //         if (employee.getID() === ID) {
    //             i = index;
    //         }
    //     });
    //     return i;
    // }

    // static deleteEmployee(ID: string) {
    //     this.EmployeeList.splice(this.findIndex(ID), 1);
    // }

    // static updateEmployee(ID:string, employee:Employee) {
    //     this.EmployeeList[this.findIndex(ID)] = employee;
    // }

    // static showInfoEmployee(ID:string){
    //     console.table([this.EmployeeList[this.findIndex(ID)]]);
    // }

    static deleteEmployee(ID:string) {
        this.EmployeeList = this.EmployeeList.filter((employee:Employee) => employee.getID() !== ID )
    }
    //
    // static updateEmployee(ID:string, newEmployee:Employee) {
    //     let index:number = this.EmployeeList.fin((employee:Employee) => employee.getID() === ID);
    // }
    //


    static showInfoEmployeeList() {
        console.table(this.EmployeeList);
    }
}