const Calculator = require('./calculator');
const {
    addData,
    multiplyData,
    subtractionData,
    divideData,
    exponentiationDataset
} = require('./datasets/mathData');

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("add", () => {
        it("should return sum of several positive numbers", () => {
            expect(calculator.add(...addData.positive)).toBe(addData.expectedPositive);
        });

        it("should return sum of negative numbers", () => {
            expect(calculator.add(...addData.negative)).toBe(addData.expectedNegative);
        });

        it("should return sum of mixed positive and negative numbers", () => {
            expect(calculator.add(...addData.mixed)).toBe(addData.expectedMixed);
        });

        it("should return zero when called with no arguments", () => {
            expect(calculator.add()).toBe(0);
        });
    });

    describe("multiply", () => {
        it("should return product of several numbers", () => {
            expect(calculator.multiply(...multiplyData.regular)).toBe(multiplyData.expectedRegular);
        });

        it("should return zero when multiplying by zero", () => {
            expect(calculator.multiply(...multiplyData.withZero)).toBe(multiplyData.expectedZero);
        });

        it("should return product of negative numbers", () => {
            expect(calculator.multiply(...multiplyData.negative)).toBe(multiplyData.expectedNegative);
        });

        it("should return one when called with no arguments", () => {
            expect(calculator.multiply()).toBe(1);
        });
    });

    describe("subtraction", () => {
        it("should return correct difference for regular subtraction", () => {
            const { reduced, subtrahend, expected } = subtractionData.regular;
            expect(calculator.subtraction(reduced, subtrahend)).toBe(expected);
        });

        it("should return negative result when subtrahend is greater", () => {
            const { reduced, subtrahend, expected } = subtractionData.negativeResult;
            expect(calculator.subtraction(reduced, subtrahend)).toBe(expected);
        });

        it("should return negative value when subtracting from zero", () => {
            const { reduced, subtrahend, expected } = subtractionData.fromZero;
            expect(calculator.subtraction(reduced, subtrahend)).toBe(expected);
        });

        it("should return the same number when subtracting zero", () => {
            const { reduced, subtrahend, expected } = subtractionData.minusZero;
            expect(calculator.subtraction(reduced, subtrahend)).toBe(expected);
        });
    });

    describe("divide", () => {
        it("should return integer result for exact division", () => {
            const { dividend, divider, expected } = divideData.exact;
            expect(calculator.divide(dividend, divider)).toBe(expected);
        });

        it("should return float result for fractional division", () => {
            const { dividend, divider, expected } = divideData.fractional;
            expect(calculator.divide(dividend, divider)).toBe(expected);
        });

        it("should return Infinity when dividing by zero", () => {
            const { dividend, divider, expected } = divideData.byZero;
            expect(calculator.divide(dividend, divider)).toBe(expected);
        });
    });

    describe("exponentiation", () => {
        it.each(exponentiationDataset)("should return %i when squaring %i", (input, expected) => {
            expect(calculator.exponentiation(input)).toBe(expected);
        });
    });

    describe("Spy testing on methods", () => {
        it("should track the method calls, call counts, and passed arguments", () => {
            const spy = jest.spyOn(calculator, 'divide');
            const { dividend, divider } = divideData.exact;

            calculator.divide(dividend, divider);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(dividend, divider);

            spy.mockRestore();
        });
    });
});
