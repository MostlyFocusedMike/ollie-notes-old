const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/api/v1/users/{username}',
    options: {
        tags: ['api', Constants.TAGS.USERS],
        description: 'Get user profile info',
        notes: "Use the 'notes' and 'filter' query params for better info",
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        cors: process.env.NODE_ENV !== 'production',
        validate: {
            params: { // this lets us make our swagger docs dynamic as well
                username: Joi.string().description('Username from GitHub'),
            },
            query: {
                notes: Joi.boolean().description("Get all of the user's notes"),
                filter: Joi.boolean().description('Filter out user metadata'),
            },
        },
        handler: async (request, h) => {
            const {
                params: { username },
                query,
                server: { app: { Database: { User } } },
            } = request;

            const [user] = query.filter
                ? await User.where('username', username, true)
                : await User.where('username', username);

            if (!user) return { msg: 'There is no user' };

            if (user.isLoggedIn(request)) user.isUser = true;
            if (query.notes) {
                user.notes = await user.getNotes(true);
            }
            return user;
        },
    },
};
