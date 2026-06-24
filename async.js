// Task 1
function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let delay1 = getRandomDelay(1000, 5000);
let delay2 = getRandomDelay(1000, 5000);
let delay3 = getRandomDelay(1000, 5000);

console.log(`Promise 1 delay: ${delay1} ms`);
console.log(`Promise 2 delay: ${delay2} ms`);
console.log(`Promise 3 delay: ${delay3} ms`);
console.log(""); // Пустая строка для красоты вывода

let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, delay1);
});

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, delay2);
});

let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, delay3);
});

Promise.race([promise1, promise2, promise3])
    .then((fastestResult) => {
        console.log(`Fastest promise result: ${fastestResult}`);
    });



// Task 2

function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 5) + 1;
            resolve(randomNumber);
        }, 3000);
    });
}

async function processSquareNumber() {
    let generatedNumber = await getNum();

    let squareResult = generatedNumber * generatedNumber;

    console.log(`Generated number: ${generatedNumber}`);
    console.log(`Square: ${squareResult}`);
}

processSquareNumber();


// Task 3

function getFirstNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 5) + 1;
            resolve(randomNumber);
        }, 3000);
    });
}

function getSecondNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 5) + 6;
            resolve(randomNumber);
        }, 5000);
    });
}

async function processSum() {
    let firstNumber = await getFirstNum();
    let secondNumber = await getSecondNum();
    let totalSum = firstNumber + secondNumber;

    console.log(`First number: ${firstNumber}`);
    console.log(`Second number: ${secondNumber}`);
    console.log(`Sum: ${totalSum}`);
}

processSum();
