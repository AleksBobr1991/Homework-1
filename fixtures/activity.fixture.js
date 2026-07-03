// fixtures/activity.fixture.js

const validActivityBody = {
    id: 101,
    title: "Learn API testing",
    dueDate: "2026-07-03T12:00:00.000Z",
    completed: false
};

const updatedActivityBody = {
    id: 1,
    title: "Updated Title by Test Framework",
    dueDate: "2026-07-03T15:00:00.000Z",
    completed: true
};

// Записываем ID как обычные строки через запятую, чтобы парсер ничего не вырезал
const rawIds = "1,2,3";
const parameterizedIds = rawIds.split(",").map(id => Number(id));

module.exports = {
    validActivityBody,
    updatedActivityBody,
    parameterizedIds
};
