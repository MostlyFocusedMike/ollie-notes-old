const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/api/v1/users/{username}/notes',
    options: {
        tags: ['api', Constants.TAGS.NOTES],
        description: 'Get all notes belonging to a user',
        // notes: '',
        validate: {
            params: { // this lets us make our swagger docs dynamic as well
                username: Joi.string().description('Username from GitHub'),
            },
        },
        handler: async (request, h) => {
            console.log('hit list-notes');
            const {
                params: { username },
                server: { app: { Database: { User } } },
            } = request;

            const [user] = await User.where('username', username);
            console.log('user: ', user);
            return user.getNotes();
        },
    },
};
