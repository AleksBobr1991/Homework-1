// Task 1
// Объявление переменных
const userName = "Maks";
let age = 34;
let student;                        // Переменная без присвоения значения
let city = "Minsk";
let pay = null;               // Переменная со значением null

// Вывод переменных в консоль
console.log(userName);
console.log(age);
console.log(student);
console.log(city);
console.log(pay);


// Task 2

console.log(typeof userName);       //вернулся тип - string
console.log(typeof age);            //вернулся тип - number
console.log(typeof student);        //вернулся тип - undefined
console.log(typeof city);           //вернулся тип - string
console.log(typeof pay);            //вернулся тип - object

// Для null оператор typeof возвращает значение "object" потому что это баг, ошибку не исправляют, чтобы не ломать
// работу старых сайтов


// Task 3
// Создание переменных Undefined и Null
let lastName;
let firstName = null;

// Выводим переменные в консоль
console.log(lastName);
console.log(firstName);

// Проверяем типы переменных через typeof
console.log(typeof lastName);
console.log(typeof firstName);

// Отличие undefined от null
// undefined - в переменной забыли дать значение
// null - в переменной специально дали пустое значение


// Task 4
// Создание переменных
let pysto = "";
let nolik = 0;
let nothing = null;
let under;
let something = 'la la la';
let number = 93;

// Преобразование каждого значения в boolean
let bpysto = Boolean(pysto);
let bnolik = Boolean(nolik);
let bnothing = Boolean(nothing);
let bunder = Boolean(under);
let bsomething = Boolean(something);
let bnumber = Boolean(number);

// Вывод результатов в консоль
console.log(bpysto);
console.log(bnolik);
console.log(bnothing);
console.log(bunder);
console.log(bsomething);
console.log(bnumber);

// Значения стали false: (пустая строка, число 0, null, undefined)
// Значения стали true: (непустая строка, любое положительное число)


// Task 5
// Создание переменных
let celoe = 40;
let drobnoe = 40.1;
let strokaCeloe = "30";
let tekst = "а у реки, а у реки, а у реки";

// Выводим в консоль типы переменных
console.log(typeof celoe);
console.log(typeof drobnoe);
console.log(typeof strokaCeloe);
console.log(typeof tekst);

// Преобразование строки с числом в тип number
let numceloe = Number(celoe);
let numdrobnoe = Number(drobnoe);

// Преобразование строки с текстом в тип number
let numstrokaCeloe = Number(strokaCeloe);
let numtekst = Number(tekst);

// Выводим результаты в консоль
console.log(numceloe);
console.log(numdrobnoe);
console.log(numstrokaCeloe);
console.log(numtekst);

// При преобразовании строки с текстом получается NaN из-за того что JS не может обычные буквы превратить в числа


// Task 6
// Проверка сложения дробных чисел
let sum = 0.1 + 0.2;

// Выводим результат в консоль
console.log(sum);

// Проверяем равен ли результат 0.3
console.log(sum === 0.3);

// Результат может быть неточным из-за того, что компьютеры используют двоичную систему счисления, вместо привычной нам
// десятичной

// Task 7
// Создание строки с текстом и пробелами
const stroka = ' JS - это СИЛА! ';

// Вывод длины строки
const lengthStroka = stroka.length;

// Удаляем лишние пробелы
const trimStroka = stroka.trim();

// Преобразуем строку в верхний регистр
const toupStroka = stroka.toUpperCase();

// Преобразуем строку в нижний регистр
const tolowStroka = stroka.toLowerCase();

// Проверка на слово "js"
const searchStroka = tolowStroka.includes("js");

// Находим индекс слова "сила" в строке
const indexStroka = tolowStroka.indexOf("сила");

// Создаем новую строку с template literal
const newStroka = `переменная Stroka содержит: ${tolowStroka}`;

// Выводим все результаты в консоль
console.log(lengthStroka);
console.log(trimStroka);
console.log(toupStroka);
console.log(tolowStroka);
console.log(searchStroka);
console.log(indexStroka);
console.log(newStroka);