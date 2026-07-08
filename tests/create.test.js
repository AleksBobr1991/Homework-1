const apiClient = require('../clients/apiClient');
const Ajv = require('ajv').default;
const { activitySchema } = require('../schemas/activity.schema');
const { validActivityBody } = require('../fixtures/activity.fixture');

const ajv = new Ajv({ allErrors: true });
const validateActivity = ajv.compile(activitySchema);

describe("API CREATE Operations - /Activities", () => {

    it("should simulate creating a new activity", async () => {
        const response = await apiClient.post('/Activities', validActivityBody);

        expect(response.status).toBe(200);
        expect(response.data.id).toBe(validActivityBody.id);
        expect(response.data.title).toBe(validActivityBody.title);
        expect(validateActivity(response.data)).toBe(true);
    });
});
