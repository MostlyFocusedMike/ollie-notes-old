const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
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
        },
        handler: async (request, h) => {
            const {
                params: { noteId },
                server: { app: { Database: { Note } } },
            } = request;

            const note = await Note.find(noteId);
            if (!note) return h.response({ msg: 'no note' }).code(404);
            return note;
        },
    },
};
