export class Calculator {
    public static add(x:number, y: number): number {
        if (x/2 + y/2 >= Number.MAX_VALUE /2){
            throw new Error('Error')
        }

        if ((x/2 + y/2) <= -Number.MAX_VALUE/2){
            throw new Error('Error')
        }
        return x + y;
    }
}
