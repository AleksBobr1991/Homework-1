const activitySchema = {
    type: "object",
    required: ["id", "title", "dueDate", "completed"],
    properties: {
        id: { type: "integer" },
        title: { type: "string" },
        dueDate: { type: "string" },
        completed: { type: "boolean" }
    },
    additionalProperties: true
};

module.exports = { activitySchema };
