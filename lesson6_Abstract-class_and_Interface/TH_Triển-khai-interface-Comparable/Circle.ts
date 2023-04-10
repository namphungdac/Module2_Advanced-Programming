export class Circle {
    constructor(private radius:number) {
    }
    getRadius():number {
        return this.radius;
    }
    setRadius(radius:number):void {
        this.radius = radius;
    }
    toString():string {
        return `A Circle with ${this.getRadius()}`;
    }
}
