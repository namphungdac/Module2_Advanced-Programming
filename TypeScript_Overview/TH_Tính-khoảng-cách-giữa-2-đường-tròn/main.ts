import {Circle} from "./Circle";

function Distance(circle1: Circle, circle2: Circle, d:number):number {
    let distance = Math.pow(circle1.radius - circle2.radius, 2) + Math.pow(d, 2);
    return Math.sqrt(distance);
}
let circle1 = new Circle(9);
let circle2 = new Circle(5);
console.log(Distance(circle1,circle2,24));