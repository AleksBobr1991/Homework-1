const apiClient = require('../clients/apiClient');
const Ajv = require('ajv').default;
const { activitySchema } = require('../schemas/activity.schema');
const { parameterizedIds } = require('../fixtures/activity.fixture');

const ajv = new Ajv({ allErrors: true });
const validateActivity = ajv.compile(activitySchema);

describe("API READ Operations - /Activities", () => {

    it("should return non-empty list of activities with valid schema", async () => {
        const response = await apiClient.get('/Activities');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.data)).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        expect(validateActivity(response.data[0])).toBe(true);
    });

    parameterizedIds.forEach((id) => {
        it(`should return activity by valid id ${id}`, async () => {
            const response = await apiClient.get(`/Activities/${id}`);

            expect(response.status).toBe(200);
            expect(response.data.id).toBe(id);
            expect(validateActivity(response.data)).toBe(true);
        });
    });

    it("should return 404 when getting activity by non-existent numeric id", async () => {
        try {
            await apiClient.get('/Activities/999999');
            throw new Error("API did not return 404");
        } catch (error) {
            if (error.message === "API did not return 404") fail(error.message);
            expect(error.response.status).toBe(404);
        }
    });

    it("should return 400 when getting activity by invalid string id", async () => {
        try {
            await apiClient.get('/Activities/invalid-id');
            throw new Error("API did not return 400");
        } catch (error) {
            if (error.message === "API did not return 400") fail(error.message);
            expect(error.response.status).toBe(400);
        }
    });
});
