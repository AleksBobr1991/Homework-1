// Task 1

// Циклом через unshift
const numbers = [1, 2, 3, 4, 5, 6];

const numbersUnshift = [];
for (let i = 0; i < numbers.length; i++) {
    numbersUnshift.unshift(numbers[i]);
}
console.log(numbersUnshift);
console.log(numbers);

// Циклом через Push
const numbersPush = [];
for (let i = numbers.length -1; i >= 0; i--) {
    numbersPush.push(numbers[i]);
}
console.log(numbersPush);
console.log(numbers);

// предотвращает скрытые баги в дальнейшем


// Task 2. Find max and min number
// Через цикл

const numbers2 = [3, 67, 15, 89, 24, 7, 101, 36];
let numbersMax = numbers2[0];
let numbersMin = numbers2[0];

for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > numbersMax) {
        numbersMax = numbers2[i];
    }
    if (numbers2[i] < numbersMin) {
        numbersMin = numbers2[i];
    }
}
console.log("Max number:", numbersMax);
console.log("Min number:", numbersMin);


// Через объект Math
console.log(`Max number: ${Math.max(...numbers2)}`);
console.log(`Min number: ${Math.min(...numbers2)}`);


// Task 3. Fibonacci array
const fib = [];
const startIndex = 3;
const length = 7;

let a = 0;
let b = 1;

for (let i = 0; fib.length < length; i++) {
    if (i >= startIndex){
        fib.push(a);
    }
    const next = a + b;
    a = b;
    b = next;
}
console.log(fib);


// Task 4. Bulls and Cows

const secret = 3487;
const guess = 3794;

const secretStr = String(secret);
const guessStr = String(guess);

const secretArray = [];
const guessArray = [];

for (let i = 0; i < secretStr.length; i++) {
    secretArray.push(Number(secretStr[i]));
    guessArray.push(Number(guessStr[i]));
}

let samePosition = 0;
let differentPosition = 0;

for (let i = 0; i < guessArray.length; i++) {
    if (guessArray[i] === secretArray[i]) {
        samePosition = samePosition + 1;
    } else if (secretArray.includes(guessArray[i])) {
        differentPosition = differentPosition + 1;
    }
}

console.log(`Same position: ${samePosition}`);
console.log(`Same value but different position: ${differentPosition}`);


// Task 5. Sort and filter users

const users = [
    { name: "Alex", age: 25, city: "Warsaw" },
    { name: "Maria", age: 32, city: "Gdansk" },
    { name: "John", age: 19, city: "Berlin" },
    { name: "Oleg", age: 41, city: "Warsaw" },
    { name: "Anna", age: 25, city: "Krakow" }
];

const agePlus = [...users].sort((a, b) => a.age - b.age);
console.log("Users sorted by age ascending:", agePlus);

const ageMinus = [...users].sort((a, b) => b.age - a.age);
console.log("Users sorted by age descending:", ageMinus);

const sortByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("Users sorted by name:", sortByName);

const userNames = users.map(user => user.name);
console.log("User names", userNames);

const olderThan25 = users.filter(user => user.age > 25);
console.log("Users older than 25:", olderThan25);

const firstFromWarsaw = users.find(user => user.city === "Warsaw");
console.log("First user from Warsaw:", firstFromWarsaw);


// Task 6. Remove duplicates and analyze products
const products = [
    { id: 1, title: "Phone", price: 1200, category: "electronics" },
    { id: 2, title: "Laptop", price: 2500, category: "electronics" },
    { id: 3, title: "Book", price: 40, category: "books" },
    { id: 4, title: "Phone", price: 1200, category: "electronics" },
    { id: 5, title: "Pen", price: 5, category: "stationery" },
    { id: 6, title: "Book", price: 40, category: "books" }
];


// 1. Удалить повторяющиеся товары (title и price)

const uniqueProducts = [];

for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];
    let isDuplicate = false;


    for (let j = 0; j < uniqueProducts.length; j++) {
        if (uniqueProducts[j].title === currentProduct.title && uniqueProducts[j].price === currentProduct.price) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate === false) {
        uniqueProducts.push(currentProduct);
    }
}

console.log("1. Unique products:");
console.log(uniqueProducts);


// 2. Получить массив всех названий товаров

const productTitles = [];

for (let i = 0; i < uniqueProducts.length; i++) {
    productTitles.push(uniqueProducts[i].title);
}

console.log("2. Product titles:");
console.log(productTitles);


// 3. Получить массив всех категорий без повторений

const uniqueCategories = [];

for (let i = 0; i < uniqueProducts.length; i++) {
    const cat = uniqueProducts[i].category;

    if (uniqueCategories.includes(cat) === false) {
        uniqueCategories.push(cat);
    }
}

console.log("3. Unique categories:");
console.log(uniqueCategories);


// 4. Посчитать общую стоимость всех уникальных товаров

let totalPrice = 0;

for (let i = 0; i < uniqueProducts.length; i++) {
    totalPrice = totalPrice + uniqueProducts[i].price;
}

console.log("4. Total price of unique products:", totalPrice);


// 5. Создать объект с количеством товаров в каждой категории

const categoryCount = {};

for (let i = 0; i < uniqueProducts.length; i++) {
    const cat = uniqueProducts[i].category;

    if (categoryCount[cat] === undefined) {
        categoryCount[cat] = 0;
    }

    categoryCount[cat] = categoryCount[cat] + 1;
}

console.log("5. Product count by category:");
console.log(categoryCount);


// 6. Анализ структуры одного товара через методы Object

const sampleProduct = uniqueProducts[0];

console.log("6. Object analysis for product id 1:");

console.log("Keys:", Object.keys(sampleProduct));

console.log("Values:", Object.values(sampleProduct));

console.log("Entries:", Object.entries(sampleProduct));
