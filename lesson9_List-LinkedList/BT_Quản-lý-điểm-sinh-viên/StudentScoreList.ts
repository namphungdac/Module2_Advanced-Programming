import {StudentScore} from "./StudentScore";

export class StudentScoreList {
    constructor(protected head: StudentScore | null = null,
                protected tail: StudentScore | null = null,
                protected size: number = 0) {
    }

    insertFirst(name: string, score: number): void {
        let node = new StudentScore(name, score);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    insertLast(name: string, score: number): void {
        let node = new StudentScore(name, score);
        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let node = new StudentScore(name, score);
            this.tail.next = node;
            this.tail = node;
        }
        this.size--;
    }

    showList() {
        let listStudentScore = [];
        let currentNode = this.head;
        while (currentNode) {
            listStudentScore.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return listStudentScore;
    }

    totalStudentsFail() {
        let ListStudentFail = [];
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.getScore() <= 5) ListStudentFail.push(currentNode.getInfoStudent());
            currentNode = currentNode.next;
        }
        return ListStudentFail;
    }

    listStudentMaxScore() {
        let ListStudentExcellent = [];
        let currentNode = this.head;
        let ListScore: number[] = [];
        this.showList().forEach(element => ListScore.push(element.score));
        let scoreMax = Math.max(...ListScore);
        while (currentNode) {
            if (currentNode.getScore() === scoreMax) ListStudentExcellent.push(currentNode.getInfoStudent())
            currentNode = currentNode.next;
        }
        return ListStudentExcellent;
    }

    findByName(nameOfStudent: string) {
        let ListStudentByName = [];
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.getName() === nameOfStudent) ListStudentByName.push(currentNode.getInfoStudent())
            currentNode = currentNode.next;
        }
        return ListStudentByName;
    }
}