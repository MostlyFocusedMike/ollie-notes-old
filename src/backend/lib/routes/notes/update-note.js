const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'PUT',
    path: '/api/v1/notes/{noteId}',
    options: {
        tags: ['api', Constants.TAGS.NOTES],
        description: 'Get a note from id',
        // notes: "",
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        validate: {
            params: {
                noteId: Joi.number().description('Id for note'),
            },
            payload: {
                title: Joi.string(),
                text: Joi.string(),
            },
        },
        handler: async (request, h) => {
            const {
                params: { noteId },
                server: { app: { Database: { Note } } },
                payload,
            } = request;

            return { id: noteId, ...payload };
        },
    },
};
