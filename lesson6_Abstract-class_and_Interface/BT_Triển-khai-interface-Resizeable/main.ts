import {Circle, Rectangle, Shape, Square} from "./Shape";

let shape = [];
shape[0] = new Circle("Circle", 10);
shape[1] = new Rectangle("Rectangle", 10,20);
shape[2] = new Square("Square", 10);
let number = Math.floor(Math.random()*100);
console.log(number);
shape.forEach((element => console.log(`The area of ${element.name} after and before is: ${element.calculateArea()}; ${element.resize(number)}`)));