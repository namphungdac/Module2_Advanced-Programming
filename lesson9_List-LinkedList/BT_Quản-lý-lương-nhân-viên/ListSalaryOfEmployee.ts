import {SalaryOfEmployee} from "./SalaryOfEmployee";

export class ListSalaryOfEmployee {
    constructor(private head: SalaryOfEmployee | null = null,
                private tail: SalaryOfEmployee | null = null) {
    }

    addFirstEmployee(name: string, month: number, money: number): void {
        let node = new SalaryOfEmployee(name, month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }

    showListEmployee(): { name: string, month: number, money: number }[] {
        let ListEmployee: { name: string, month: number, money: number }[] = [];
        let currentNode = this.head;
        while (currentNode) {
            ListEmployee.push(currentNode.getInfoEmployee());
            currentNode = currentNode.next;
        }
        return ListEmployee;
    }

    sumSalaryOfEmployee(): number {
        return this.showListEmployee().reduce((sum, element) => {
            return sum + element.money;
        }, 0);
    }

    findMaxSalaryMonths() {
        let currentNode = this.head;
        let maxSalary: number = 0;
        while (currentNode) {
            if (currentNode.getMoney() >= maxSalary) {
                maxSalary = currentNode.getMoney();
            }
            currentNode = currentNode.next;
        }

        let ListMaxSalaryMonths: { month: number, money: number }[] = [];
        currentNode = this.head;
        while (currentNode) {
            if (maxSalary === currentNode.getMoney()) {
                ListMaxSalaryMonths.push({month: currentNode.getMonth(), money: currentNode.getMoney()});
            }
            currentNode = currentNode.next;
        }
        return ListMaxSalaryMonths;
    }
}