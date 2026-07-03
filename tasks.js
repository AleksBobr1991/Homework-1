// ==========================================
// ЗАДАНИЕ 1: Форматирование в валюту
// ==========================================
/**
 * Форматирует массив строковых чисел в формат валюты USD.
 * @param {Array<string|number>} arr - Массив строковых представлений чисел.
 * @returns {Array<string>} Массив отформатированных строк валюты.
 * @throws {Error} Если данные некорректны (пустые строки, не числа).
 */
function formatToCurrency(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Входные данные должны быть массивом");
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return arr.map((item, index) => {
        if ((typeof item !== 'string' && typeof item !== 'number') || String(item).trim() === '') {
            throw new Error(`Ошибка в элементе под индексом ${index}: Некорректный тип данных.`);
        }

        const number = Number(item);
        if (Number.isNaN(number)) {
            throw new Error(`Ошибка в элементе под индексом ${index} ("${item}"): Не является валидным числом.`);
        }

        return formatter.format(number);
    });
}

// ==========================================
// ЗАДАНИЕ 2: Фильтрация falsy и сортировка
// ==========================================
/**
 * Удаляет из массива все falsy значения и сортирует оставшиеся числа по убыванию.
 * @param {Array} arr - Исходный массив с любыми типами данных.
 * @returns {Array<number>} Отфильтрованный и отсортированный массив.
 */
function filterAndSortDescending(arr) {
    if (!Array.isArray(arr)) return [];

    return arr
        .filter(Boolean) // Удаляет false, 0, "", null, undefined, NaN
        .sort((a, b) => Number(b) - Number(a)); // Сортировка по убыванию чисел
}

// ==========================================
// ЗАДАНИЕ 3: Группировка по возрасту
// ==========================================
/**
 * Группирует людей по их возрасту.
 * @param {Array<Object>} people - Массив объектов с полями {name, age}.
 * @returns {Object} Объект, где ключи — возраст, а значения — массивы имен.
 */
function groupByAge(people) {
    if (!Array.isArray(people)) return {};

    return people.reduce((acc, person) => {
        const age = person.age;
        if (!acc[age]) {
            acc[age] = [];
        }
        acc[age].push(person.name);
        return acc;
    }, {});
}

// ==========================================
// ЗАДАНИЕ 4: Параллельные промисы
// ==========================================
/**
 * Выполняет массив функций, возвращающих промисы, параллельно.
 * @param {Array<Function>} functionsArray - Массив функций, генерирующих промисы.
 * @returns {Promise<Array>} Промис, возвращающий массив результатов в исходном порядке.
 */
async function runPromisesInParallel(functionsArray) {
    if (!Array.isArray(functionsArray)) {
        throw new Error("Ожидался массив функций");
    }
    const promises = functionsArray.map(fn => fn());
    return await Promise.all(promises);
}

// ==========================================
// ЗАДАНИЕ 6: Цепочка промисов (3 секунды)
// ==========================================
/**
 * Запускает цепочку из трех промисов, каждый из которых возводит число в квадрат с задержкой в 3 секунды.
 * @param {number} startValue - Начальное число для вычислений.
 */
function runPromiseChain(startValue) {
    const squareAfterThreeSeconds = (num) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(num * num), 3000);
        });
    };

    console.log(`\n--- Задание 6 ---`);
    console.log(`Стартовое число: ${startValue}. Ждем 3 сек...`);

    Promise.resolve(startValue)
        .then((num) => squareAfterThreeSeconds(num))
        .then((result1) => {
            console.log(`Результат 1 (через 3 сек): ${result1}. Ждем еще 3 сек...`);
            return squareAfterThreeSeconds(result1);
        })
        .then((finalResult) => {
            console.log(`Финальный результат (через 6 сек): ${finalResult}`);
        });
}


// ==========================================
// БЛОК ЗАПУСКА И ТЕСТИРОВАНИЯ ВСЕХ ЗАДАЧ
// ==========================================
console.log("--- Задание 1 ---");
try {
    console.log(formatToCurrency(["1234", "5678.9", 1000000]));
} catch (e) { console.error(e.message); }

console.log("\n--- Задание 2 ---");
const mixedArray = [0, 15, false, 42, "", null, 8, undefined, NaN, 100];
console.log(filterAndSortDescending(mixedArray));

console.log("\n--- Задание 3 ---");
const people = [
    { name: "Алексей", age: 25 },
    { name: "Иван", age: 30 },
    { name: "Мария", age: 25 },
    { name: "Петр", age: 20 }
];
console.log(groupByAge(people));

console.log("\n--- Задание 4 ---");
const delay = (ms, val) => () => new Promise(res => setTimeout(() => res(val), ms));
const fns = [delay(1000, "A"), delay(500, "B"), delay(1500, "C")];
runPromisesInParallel(fns).then(res => {
    console.log("Результаты параллельного запуска:", res);

    // Задание 6 запускаем в самом конце, так как оно долгое (6 секунд таймеров)
    runPromiseChain(2);
});
