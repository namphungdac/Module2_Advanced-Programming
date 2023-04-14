export class Patient {
    constructor(private name: string,
                protected code: number,
                protected condition: string = "Unexamined") {
    }

    getName(): string {
        return this.name;
    }

    getCode(): number {
        return this.code;
    }

    setCondition(value: string): void {
        this.condition = value;
    }

    getCondition(): string {
        return this.condition;
    }

    showPatient(): string {
        return `bệnh nhân:${this.name} có mã ${this.code}`;
    }
}