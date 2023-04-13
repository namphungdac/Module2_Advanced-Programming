export interface InterfaceArrayList<T> {
    add(data:T):void;
    get(index:number):T;
    size():number;
    remove():void;
}

export class ArrayList<T> implements InterfaceArrayList<T>{
    container:T[];
    constructor() {
        this.container = [];
    }
    add(data:T):void{
        this.container.push(data);
    };
    get(index:number):T {
        return this.container[index];
    };
    remove() {
        this.container.pop();
    };
    size(): number {
        return this.container.length;
    }
}