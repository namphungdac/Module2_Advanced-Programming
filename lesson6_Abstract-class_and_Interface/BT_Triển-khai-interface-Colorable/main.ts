import {Circle} from "./Shape";
import {Rectangle} from "./Shape";
import {Square} from "./Shape";

let shape = [];
shape[0] = new Circle("Circle", 10);
shape[1] = new  Rectangle("Retangle", 10, 20);
shape[2] = new  Square("Square", 10);

shape.forEach((element => {
    console.log(`The area of ${element.getName()} is: ${element.calculateArea()}`);
    if (element instanceof Square) {
        console.log(element.howToColor());
    }
}));