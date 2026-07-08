const apiClient = require('../clients/apiClient');
const { updatedActivityBody } = require('../fixtures/activity.fixture');

describe("API UPDATE Operations - /Activities", () => {

    it("should simulate updating an existing activity", async () => {
        const response = await apiClient.put('/Activities/1', updatedActivityBody);

        expect(response.status).toBe(200);
        expect(response.data.title).toBe(updatedActivityBody.title);
        expect(response.data.id).toBe(1);
    });
});
