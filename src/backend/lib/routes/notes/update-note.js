const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'PATCH',
    path: '/api/v1/notes/{noteId}',
    options: {
        tags: ['api', Constants.TAGS.NOTES],
        description: "Update a note's title and text",
        // notes: "",
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        validate: {
            params: {
                noteId: Joi.number().description('Id for note'),
            },
            payload: Joi.object({
                id: Joi.number(),
                title: Joi.string().allow('').description('Title of note'),
                text: Joi.string().allow('').description('Actual note content'),
            }),
        },
        handler: async (request, h) => {
            const {
                params: { noteId },
                server: { app: { Database: { Note } } },
                payload,
            } = request;
            console.log('payload: ', payload);
            const note = await Note.update({ id: noteId, ...payload });
            if (!note) return h.response({ msg: 'no note' }).code(404);
            return note;
        },
    },
};
