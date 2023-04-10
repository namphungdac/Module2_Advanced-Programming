interface Colorable {
    howToColor():string;
}

export class Shape {
    constructor(protected name: string) {
    }

    show(): string {
        return `I am a shape. My name is ${this.name}`;
    }
}

export class Circle extends Shape {
    constructor(name: string, private radius: number) {
        super(name);
    }

    getName():string {
        return this.name;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculatePerimeter(): number {
        return Math.PI * this.radius * 2;
    }
}

export class Rectangle extends Shape {
    constructor(name: string,
                private width: number,
                private height: number) {
        super(name);
    }

    getName():string {
        return this.name;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}

export class Square extends Rectangle implements Colorable {
    constructor(name: string,
                width: number) {
        super(name, width, width);
    }

    getName():string {
        return this.name;
    }

    howToColor():string {
        return `Color all four sides...`;
    }
}
