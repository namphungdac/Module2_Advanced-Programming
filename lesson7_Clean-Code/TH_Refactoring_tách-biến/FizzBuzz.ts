export class FizzBuzz {
    message: string;

    constructor(n: number) {
        let Buzz = n % 3 == 0;
        let Fizz = n % 5 == 0;
        if (Buzz && Fizz) {
            this.message = 'FizzBuzz';
        } else if (Fizz) {
            this.message = 'Fizz';
        } else if(Buzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}
