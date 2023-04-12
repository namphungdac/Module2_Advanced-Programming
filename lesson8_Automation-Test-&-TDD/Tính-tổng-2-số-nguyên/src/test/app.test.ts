import {Calculator} from '../app'

describe("add function", () => {
    test("add two number", () => {
        const number1 = 1;
        const number2 = 2;
        const result = 3;

        expect(Calculator.add(number1, number2)).toBe(result);
    });

    test("add two number < 0", () => {
        const number1 = -1;
        const number2 = -2;
        const result = -3;

        expect(Calculator.add(number1, number2)).toBe(result);
    });

    test("add two number with number1 < 0 and number2 > 0", () => {
        const number1 = -1;
        const number2 = 2;
        const result = 1;

        expect(Calculator.add(number1, number2)).toBe(result);
    });

    test("add two number with number1 max number type", () => {
        const number1 = Number.MAX_VALUE;
        const number2 = 1;
        const result = 'Error';
        try {
            return Calculator.add(number1, number2)
        }catch (e) {
            expect(e.message).toBe(result);
        }
    });

    test("add two number with number1 min number type", () => {
        const number1 = -Number.MAX_VALUE;
        const number2 = -1;
        const result = "Error";
        try {
            return Calculator.add(number1, number2)
        }catch (e) {
            expect(e.message).toBe(result);
        }
    });
});