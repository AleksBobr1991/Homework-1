// datasets/mathData.js
module.exports = {
    // Данные для метода add
    addData: {
        positive: Array(1, 2, 3),
        negative: Array(-1, -2, -3),
        mixed: Array(5, -2, 3, -1),
        expectedPositive: 6,
        expectedNegative: -6,
        expectedMixed: 5
    },
    // Данные для метода multiply
    multiplyData: {
        regular: Array(2, 3, 4),
        withZero: Array(5, 0, 10),
        negative: Array(-2, 3, -4),
        expectedRegular: 24,
        expectedZero: 0,
        expectedNegative: 24
    },
    // Данные для метода subtraction
    subtractionData: {
        regular: { reduced: 10, subtrahend: 4, expected: 6 },
        negativeResult: { reduced: 4, subtrahend: 10, expected: -6 },
        fromZero: { reduced: 0, subtrahend: 5, expected: -5 },
        minusZero: { reduced: 5, subtrahend: 0, expected: 5 }
    },
    // Данные для метода divide
    divideData: {
        exact: { dividend: 10, divider: 2, expected: 5 },
        fractional: { dividend: 5, divider: 2, expected: 2.5 },
        byZero: { dividend: 10, divider: 0, expected: Infinity }
    },
    // Датасет для параметризованного теста exponentiation (it.each)
    exponentiationDataset: Array(
        Array(5, 25),
        Array(-4, 16),
        Array(0, 0)
    )
};
