const Joi = require('joi');
const Constants = require('../constants');

module.exports = {
    method: 'GET',
    path: '/api/v1/users',
    options: {
        tags: ['api', Constants.TAGS.USERS],
        description: 'Get profile info of all users',
        notes: "Use the 'filter' query param to get rid of metadata",
        validate: {
            query: {
                filter: Joi.boolean().description('Filter out user metadata'),
            },
        },
        handler: async (request, h) => {
            const {
                server: { app: { Database: { User } } },
                query,
            } = request;


            const users = query.filter ? await User.allFiltered() : await User.all();

            return users;
        },
    },
};
