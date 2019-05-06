const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/login',
    options: {
        tags: ['api', Constants.TAGS.STATIC],
        description: 'Tells Hapi to use the front end router',
        notes: 'Hapi gets all requests first, so to get the front end router to take over, it looks like we have to specify',
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        handler: async (request, h) => {
            return h.file('./index.html');
        },
    },
};
