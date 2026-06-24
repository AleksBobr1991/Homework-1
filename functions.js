// ============================================================================
// TASK 1: Dice Game
// ============================================================================
function playDiceGame(playersCount, throwsCount) {
    let playerTotals = [];
    let maxTotal = 0;

    for (let playerNum = 1; playerNum <= playersCount; playerNum++) {
        let currentThrows = [];
        let currentTotal = 0;

        for (let t = 0; t < throwsCount; t++) {
            let roll = Math.floor(Math.random() * 6) + 1;
            currentThrows.push(roll);
            currentTotal += roll;
        }

        playerTotals[playerNum] = currentTotal;

        if (currentTotal > maxTotal) {
            maxTotal = currentTotal;
        }

        console.log(`Player ${playerNum} throws: ${currentThrows.join(", ")}. Total: ${currentTotal}`);
    }

    console.log("");

    let winnersCount = 0;
    let winnerNumber = 0;
    let winnersList = "";

    for (let i = 1; i <= playersCount; i++) {
        if (playerTotals[i] === maxTotal) {
            winnersCount++;
            winnerNumber = i;

            if (winnersList === "") {
                winnersList = `Player ${i}`;
            } else {
                winnersList = `${winnersList}, Player ${i}`;
            }
        }
    }

    if (winnersCount === 1) {
        console.log(`Winner: Player ${winnerNumber} with ${maxTotal} points`);
    } else {
        console.log(`Draw between players: ${winnersList}`);
    }
}


// ============================================================================
// TASK 2: Split number into random parts
// ============================================================================
function splitNumber(number, partsCount) {
    if (partsCount === 1) {
        return [number];
    }

    let cuts = [];

    for (let i = 0; i < partsCount - 1; i++) {
        let cut = Math.floor(Math.random() * (number - 1)) + 1;

        if (cuts.includes(cut)) {
            i--;
        } else {
            cuts.push(cut);
        }
    }

    cuts.sort((a, b) => a - b);

    let result = [];
    let previousCut = 0;

    for (let i = 0; i < cuts.length; i++) {
        let currentPart = cuts[i] - previousCut;
        result.push(currentPart);
        previousCut = cuts[i];
    }

    result.push(number - previousCut);

    let sum = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }

    console.log(`Разбитие числа ${number} на ${partsCount} частей: [${result.join(", ")}]`);
    console.log(`Сумма: ${result.join(" + ")} = ${sum}`);

    return result;
}


// ============================================================================
// TASK 3: Count Friday the 13th
// ============================================================================
function countFriday13(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let current = new Date(start);

    let count = 0;
    let datesList = [];

    while (current <= end) {
        // Используем getUTCDay(), чтобы избежать смещения часовых поясов при чтении дат
        if (current.getDate() === 13 && current.getUTCDay() === 5) {
            count++;

            let year = current.getFullYear();
            let month = String(current.getMonth() + 1).padStart(2, '0');
            let day = String(current.getDate()).padStart(2, '0');

            datesList.push(`${year}-${month}-${day}`);
        }

        current.setDate(current.getDate() + 1);
    }

    console.log("Friday 13th dates:");
    for (let i = 0; i < datesList.length; i++) {
        console.log(datesList[i]);
    }

    console.log("");
    console.log(`Total Friday 13th count: ${count}`);

    return count;
}


// ============================================================================
// ПРИМЕРЫ
// ============================================================================
console.log("=== ТЕСТ ЗАДАНИЯ 1 ===");
playDiceGame(3, 5);

console.log("\n=== ТЕСТ ЗАДАНИЯ 2 ===");
splitNumber(20, 5);

console.log("\n=== ТЕСТ ЗАДАНИЯ 3 ===");
countFriday13("2000-01-01", "2020-12-31");
