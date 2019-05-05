const Joi = require('joi');
const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/api/v1/users',
    options: {
        tags: ['api', Constants.TAGS.USERS],
        description: 'Get profile info of all users',
        notes: "Use the 'metadata' query param to get rid of metadata",
        // cors: process.env.NODE_ENV !== 'production',
        validate: {
            query: {
                metadata: Joi.boolean().description('Filter out user metadata'),
            },
        },
        handler: async (request, h) => {
            console.log('hit list-users');
            const {
                server: { app: { Database: { User } } },
                query,
            } = request;

            const users = query.metadata ? await User.all(true) : await User.all();

            return users;
        },
    },
};
