import {Patient} from "./Patient";

export class ListPatient {
    constructor(private ListUnexaminedPatients: Patient[] = [],
                private ListExaminedPatients: Patient[] = [],
                protected size: number = 0) {
    }

    enqueue(patient: Patient): void {
        this.ListUnexaminedPatients.push(patient);
        this.size++;
    }

    sortListUnexaminedPatients() {
        this.ListUnexaminedPatients.sort((a, b) => a.getCode() - b.getCode());
    }

    dequeue(): Patient {
        this.size--;
        this.ListUnexaminedPatients[0].setCondition("Examined");
        let examinedPatient: Patient = this.ListUnexaminedPatients.shift();
        this.ListExaminedPatients.push(examinedPatient);
        return examinedPatient;
    }

    examinedPatient(): string {
        return `Mời ${this.dequeue().showPatient()} vào khám`;
    }

    examinedNextPatient(): string {
        return `Mời ${this.ListUnexaminedPatients[0].showPatient()} chuẩn bị`;
    }

    getListUnexaminedPatients(): Patient[] {
        return this.ListUnexaminedPatients;
    }

    getListExaminedPatients(): Patient[] {
        return this.ListExaminedPatients;
    }
}