// Task: Unit Testing Calculator
const Calculator = require('./calculator');

describe("Calculator", () => {
    let calculator;

    // Изолируем тесты друг от друга
    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("add", () => {
        it("should return sum of several positive numbers", () => {
            // Arrange
            const num1 = 1;
            const num2 = 2;
            const num3 = 3;

            // Act
            const result = calculator.add(num1, num2, num3);

            // Assert
            expect(result).toBe(6);
        });

        it("should return sum of negative numbers", () => {
            // Arrange
            const num1 = -1;
            const num2 = -2;
            const num3 = -3;

            // Act
            const result = calculator.add(num1, num2, num3);

            // Assert
            expect(result).toBe(-6);
        });

        it("should return sum of mixed positive and negative numbers", () => {
            // Arrange
            const num1 = 5;
            const num2 = -2;
            const num3 = 3;
            const num4 = -1;

            // Act
            const result = calculator.add(num1, num2, num3, num4);

            // Assert
            expect(result).toBe(5);
        });

        it("should return zero when called with no arguments", () => {
            // Act
            const result = calculator.add();

            // Assert
            expect(result).toBe(0);
        });
    });

    describe("multiply", () => {
        it("should return product of several numbers", () => {
            // Arrange
            const num1 = 2;
            const num2 = 3;
            const num3 = 4;

            // Act
            const result = calculator.multiply(num1, num2, num3);

            // Assert
            expect(result).toBe(24);
        });

        it("should return zero when multiplying by zero", () => {
            // Arrange
            const num1 = 5;
            const num2 = 0;
            const num3 = 10;

            // Act
            const result = calculator.multiply(num1, num2, num3);

            // Assert
            expect(result).toBe(0);
        });

        it("should return product of negative numbers", () => {
            // Arrange
            const num1 = -2;
            const num2 = 3;
            const num3 = -4;

            // Act
            const result = calculator.multiply(num1, num2, num3);

            // Assert
            expect(result).toBe(24);
        });

        it("should return one when called with no arguments", () => {
            // Act
            const result = calculator.multiply();

            // Assert
            expect(result).toBe(1);
        });
    });

    describe("subtraction", () => {
        it("should return correct difference for regular subtraction", () => {
            // Arrange
            const reduced = 10;
            const subtrahend = 4;

            // Act
            const result = calculator.subtraction(reduced, subtrahend);

            // Assert
            expect(result).toBe(6);
        });

        it("should return negative result when subtrahend is greater", () => {
            // Arrange
            const reduced = 4;
            const subtrahend = 10;

            // Act
            const result = calculator.subtraction(reduced, subtrahend);

            // Assert
            expect(result).toBe(-6);
        });

        it("should return negative value when subtracting from zero", () => {
            // Arrange
            const reduced = 0;
            const subtrahend = 5;

            // Act
            const result = calculator.subtraction(reduced, subtrahend);

            // Assert
            expect(result).toBe(-5);
        });

        it("should return the same number when subtracting zero", () => {
            // Arrange
            const reduced = 5;
            const subtrahend = 0;

            // Act
            const result = calculator.subtraction(reduced, subtrahend);

            // Assert
            expect(result).toBe(5);
        });
    });

    describe("divide", () => {
        it("should return integer result for exact division", () => {
            // Arrange
            const dividend = 10;
            const divider = 2;

            // Act
            const result = calculator.divide(dividend, divider);

            // Assert
            expect(result).toBe(5);
        });

        it("should return float result for fractional division", () => {
            // Arrange
            const dividend = 5;
            const divider = 2;

            // Act
            const result = calculator.divide(dividend, divider);

            // Assert
            expect(result).toBe(2.5);
        });

        it("should return Infinity when dividing by zero", () => {
            // Arrange
            const dividend = 10;
            const divider = 0;

            // Act
            const result = calculator.divide(dividend, divider);

            // Assert
            expect(result).toBe(Infinity);
        });
    });

    describe("exponentiation", () => {
        // ПАРАМЕТРИЗАЦИЯ
        it.each([
            [-4, 16],
            [0, 0]
        ])("should return %i when squaring %i", (input, expected) => {
            // Act
            const result = calculator.exponentiation(input);

            // Assert
            expect(result).toBe(expected);
        });
    });

    // MOCKING: Вариант 2. Spy
    describe("Spy testing on methods", () => {
        it("should track the method calls, call counts, and passed arguments", () => {
            // Arrange
            const spy = jest.spyOn(calculator, 'divide');
            const arg1 = 10;
            const arg2 = 2;

            // Act
            calculator.divide(arg1, arg2);

            // Assert
            expect(spy).toHaveBeenCalled(); // Был ли вызван метод
            expect(spy).toHaveBeenCalledTimes(1); // Сколько раз он был вызван
            expect(spy).toHaveBeenCalledWith(arg1, arg2); // С какими аргументами был вызван

            // Возращаем методу оригинальное состояние
            spy.mockRestore();
        });
    });
});