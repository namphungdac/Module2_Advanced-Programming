import {Tiger} from "./Animal";
import {Chicken} from "./Animal";
import {Apple} from "./Fruit";
import {Orange} from "./Fruit";

console.log('---Animals-----')
let animals = []
animals[0] = new Tiger();
animals[1] = new Chicken();

animals.forEach((item,index) => {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat())
    }
})

console.log('---Fruits-----')
let fruits = []
fruits[0] = new Apple();
fruits[1] = new Orange();

fruits.forEach(item => {
    console.log(item.howtoEat())
})