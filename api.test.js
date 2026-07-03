// api.test.js
const apiClient = require('./clients/apiClient');
const Ajv = require('ajv').default;
const { activitySchema } = require('./schemas/activity.schema');
const {
    validActivityBody,
    updatedActivityBody,
    parameterizedIds
} = require('./fixtures/activity.fixture');

const ajv = new Ajv({ allErrors: true });
const validateActivity = ajv.compile(activitySchema);

describe("Integration API Tests - /Activities", () => {

    // ========================================================
    // POSITIVE CASES
    // ========================================================
    describe("Positive cases", () => {

        // 1. GET list
        it("should return non-empty list of activities with valid schema", async () => {
            const response = await apiClient.get('/Activities');

            expect(response.status).toBe(200);
            expect(Array.isArray(response.data)).toBe(true);
            expect(response.data.length).toBeGreaterThan(0);

            // ИСПРАВЛЕНИЕ: Передаем для проверки схемы именно первый ОБЪЕКТ из массива ответов
            const isSchemaValid = validateActivity(response.data[0]);
            if (!isSchemaValid) console.error(validateActivity.errors);
            expect(isSchemaValid).toBe(true);
        });

        // 2. GET by valid id (ПАРАМЕТРИЗАЦИЯ)
        parameterizedIds.forEach((id) => {
            it(`should return activity by valid id ${id}`, async () => {
                const response = await apiClient.get(`/Activities/${id}`);

                expect(response.status).toBe(200);
                expect(response.data.id).toBe(id);

                // Проверка схемы в параметризованном тесте (Требование ТЗ)
                expect(validateActivity(response.data)).toBe(true);
            });
        });

        // 4. POST create entity
        it("should simulate creating a new activity", async () => {
            const response = await apiClient.post('/Activities', validActivityBody);

            expect(response.status).toBe(200);
            expect(response.data.id).toBe(validActivityBody.id);
            expect(response.data.title).toBe(validActivityBody.title);

            // Проверка схемы при создании
            expect(validateActivity(response.data)).toBe(true);
        });

        // 5. PUT update entity
        it("should simulate updating an existing activity", async () => {
            const response = await apiClient.put('/Activities/1', updatedActivityBody);

            expect(response.status).toBe(200);
            expect(response.data.title).toBe(updatedActivityBody.title);
            expect(response.data.id).toBe(1);
        });

        // 6. DELETE entity
        it("should simulate deleting an activity by id", async () => {
            const response = await apiClient.delete('/Activities/1');

            expect(response.status).toBe(200);
            expect(response.data).toBeDefined();
        });

        // ЗАДАНЫЕ СО ЗВЕЗДОЧКОЙ: Проверка времени ответа сервера
        it("should respond in less than 3000 ms (Performance assertion)", async () => {
            const startTime = Date.now();
            const response = await apiClient.get('/Activities');
            const duration = Date.now() - startTime;

            expect(response.status).toBe(200);
            // Дадим запас до 3000мс на случай задержек облачного сервера Azure
            expect(duration).toBeLessThan(3000);
            console.log(`Фактическое время ответа API: ${duration} ms`);
        });
    });

    // ========================================================
    // NEGATIVE CASES
    // ========================================================
    describe("Negative cases", () => {

        // 3. GET by invalid id
        it("should return 404 when getting activity by non-existent numeric id", async () => {
            try {
                await apiClient.get('/Activities/999999');
                throw new Error("API не вернул ошибку 404");
            } catch (error) {
                if (error.message === "API не вернул ошибку 404") {
                    fail(error.message);
                }
                expect(error.response.status).toBe(404);
            }
        });

        it("should return 400 when getting activity by invalid string id", async () => {
            try {
                await apiClient.get('/Activities/invalid-id');
                throw new Error("API не вернул ошибку 400");
            } catch (error) {
                if (error.message === "API не вернул ошибку 400") {
                    fail(error.message);
                }
                expect(error.response.status).toBe(400);
            }
        });

        it("should return 400 when deleting activity by invalid string id", async () => {
            try {
                await apiClient.delete('/Activities/invalid-id');
                throw new Error("API не вернул ошибку 400");
            } catch (error) {
                if (error.message === "API не вернул ошибку 400") {
                    fail(error.message);
                }
                expect(error.response.status).toBe(400);
            }
        });
    });
});
