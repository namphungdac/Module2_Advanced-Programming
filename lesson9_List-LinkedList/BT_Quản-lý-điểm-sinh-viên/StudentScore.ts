export class StudentScore {
    constructor(protected name: string,
                protected score: number,
                public next: StudentScore | null = null) {
    }

    getName(): string {
        return this.name;
    }

    getScore(): number {
        return this.score;
    }

    getInfoStudent() {
        return {name: this.name, score: this.score};
    }
}