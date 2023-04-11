enum Speeds {
    SLOW = 1,
    MEDIUM,
    FAST,
}

class Fan {
    speed: number = Speeds.SLOW;
    on: boolean = false;
    radius: number = 5;
    color: string = "blue";
    // constructor(speed:number, on:boolean, radius:number, color:string) {
    //     this.speed = speed;
    //     this.on = on;
    //     this.radius = radius;
    //     this.color = color;
    // }
    constructor() {
    }

    setSpeed(value: Speeds) {
        this.speed = value;
    }

    setOn(value: boolean) {
        this.on = value;
    }

    setRadius(value: number) {
        this.radius = value;
    }

    setColor(value: string) {
        this.color = value;
    }

    toString() {
        if (this.on !== false) {
            return `fan1 is on with: speed = ${this.speed}, radius = ${this.radius}, color = ${this.color}`;
        } else {
            return `fan2 is off with: raius = ${this.radius}, color = ${this.color}`;
        }
    }
}

let Fan1 = new Fan();
Fan1.setOn(true);
Fan1.setSpeed(Speeds.FAST);
Fan1.setRadius(10);
Fan1.setColor("yellow");

let Fan2 = new Fan();
Fan2.setSpeed(Speeds.MEDIUM);
Fan2.setRadius(5);
Fan2.setColor("blue");

console.log(Fan1.toString());
console.log(Fan2.toString());