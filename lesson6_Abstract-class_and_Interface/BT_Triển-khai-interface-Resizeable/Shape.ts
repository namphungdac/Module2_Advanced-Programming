import {Resizeable} from "./Resizeable";

export class Shape {
    constructor(public name: string) {
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}

export class Circle extends Shape implements Resizeable {
    constructor(name: string, public radius: number) {
        super(name);
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }

    resize(number: number) {
        this.radius += this.radius * number / 100;
        return this.calculateArea();
    }
}

export class Rectangle extends Shape implements Resizeable {
    constructor(name: string,
                public width: number,
                public height: number) {
        super(name);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }

    resize(number: number) {
        this.width += this.width * number / 100;
        this.height += this.height * number / 100
        return this.calculateArea();
    }
}

export class Square extends Rectangle implements Resizeable {
    constructor(name: string,
                width: number) {
        super(name, width, width);
    }
}