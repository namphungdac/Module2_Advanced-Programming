import {Edible} from "./Edible";

export abstract class Fruit implements Edible{
    abstract howtoEat(): string;
}

export class Apple extends Fruit{
    howtoEat(): string {
        return "Apple could be slided";
    }
}

export class Orange extends Fruit{
    howtoEat(): string {
        return "Orange could be juiced";
    }
}