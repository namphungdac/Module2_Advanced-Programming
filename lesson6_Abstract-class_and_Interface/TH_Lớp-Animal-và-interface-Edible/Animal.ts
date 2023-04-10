import {Edible} from "./Edible";

abstract class Animal {
    abstract makeSound():string;
}

export class Tiger extends Animal{
    makeSound():string {
        return "Tiger: roarrr!!!"
    }
}
export class Chicken extends Animal implements Edible{
    makeSound():string {
        return "Chicken: cluck-cluck";
    }
    howtoEat(): string {
        return "Could be fried";
    }
}
