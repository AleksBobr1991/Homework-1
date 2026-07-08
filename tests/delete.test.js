const apiClient = require('../clients/apiClient');

describe("API DELETE Operations - /Activities", () => {

    it("should simulate deleting an activity by id", async () => {
        const response = await apiClient.delete('/Activities/1');

        expect(response.status).toBe(200);
        expect(response.data).toBeDefined();
    });

    it("should return 400 when deleting activity by invalid string id", async () => {
        try {
            await apiClient.delete('/Activities/invalid-id');
            throw new Error("API did not return 400");
        } catch (error) {
            if (error.message === "API did not return 400") fail(error.message);
            expect(error.response.status).toBe(400);
        }
    });
});
