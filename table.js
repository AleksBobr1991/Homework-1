const readline = require('readline');

// Создаем интерфейс для ввода/вывода в консоли Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Генерирует и печатает в консоль выровненную таблицу умножения nxn,
 * а также считает и выводит суммы строк, столбцов и общую сумму таблицы.
 * @param {number} n - Размерность таблицы умножения.
 */
function generateMultiplicationTable(n) {
    // Рассчитываем ширину разделительной линии в зависимости от размера таблицы
    console.log("\n" + "-".repeat(n * 6 + 12));
    let header = "   x   |";
    for (let i = 1; i <= n; i++) {
        header += String(i).padStart(5);
    }
    console.log(header);
    console.log("-".repeat(n * 6 + 12));

    const rowSums = [];
    const colSums = Array(n).fill(0);
    let totalSum = 0;

    // Генерируем строки таблицы
    for (let i = 1; i <= n; i++) {
        let rowStr = String(i).padStart(6) + " |";
        let currentRowSum = 0;

        for (let j = 1; j <= n; j++) {
            const product = i * j;
            rowStr += String(product).padStart(5);

            currentRowSum += product;
            colSums[j - 1] += product;
            totalSum += product;
        }

        rowSums.push(currentRowSum);
        console.log(rowStr);
    }

    console.log("-".repeat(n * 6 + 12));

    // Выводим суммы строк и столбцов с выравниванием по колонкам
    console.log("Sum of Rows:   " + rowSums.map(s => String(s).padStart(5)).join(""));
    console.log("Sum of Columns:" + colSums.map(s => String(s).padStart(5)).join(""));
    console.log(`Total Sum of Table: ${totalSum}\n`);
}

/**
 * Интерактивная функция для запроса числа у пользователя с полной валидацией.
 */
function askForNumber() {
    rl.question('Введите размер таблицы n (или нажмите Enter для размера 10): ', (input) => {
        // Если пользователь нажал Enter — используем размер по умолчанию (10)
        if (input.trim() === "") {
            generateMultiplicationTable(10);
            rl.close();
            return;
        }

        const n = Number(input);

        // Валидация крайнего случая: проверка на число
        if (Number.isNaN(n)) {
            console.log("Предупреждение: Введено не число! Пожалуйста, попробуйте еще раз.");
            askForNumber();
            return;
        }

        // Валидация крайнего случая: проверка на целое число
        if (!Number.isInteger(n)) {
            console.log("Предупреждение: Значение n должно быть целым числом! Пожалуйста, попробуйте еще раз.");
            askForNumber();
            return;
        }

        // Валидация крайнего случая: проверка на диапазон (меньше 1)
        if (n < 1) {
            console.log("Ошибка: Значение должно быть больше или равно 1! Пожалуйста, попробуйте еще раз.");
            askForNumber();
            return;
        }

        // Если все проверки пройдены, строим таблицу
        generateMultiplicationTable(n);
        rl.close();
    });
}

// Стартуем программу при запуске файла
askForNumber();
