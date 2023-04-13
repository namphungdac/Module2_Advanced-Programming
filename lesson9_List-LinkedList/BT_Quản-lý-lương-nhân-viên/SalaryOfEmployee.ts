export class SalaryOfEmployee {
    constructor(private name: string,
                private month: number,
                private money: number,
                public next: SalaryOfEmployee | null = null) {
    }

    getName(): string {
        return this.name;
    }

    getMonth(): number {
        return this.month;
    }

    getMoney(): number {
        return this.money;
    }

    getInfoEmployee(): { name: string, month: number, money: number } {
        return {name: this.name, month: this.month, money: this.money};
    }
}