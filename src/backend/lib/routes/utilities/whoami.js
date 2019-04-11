const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/whoami',
    options: {
        tags: ['api', Constants.TAGS.UTIL],
        description: 'See your session cookie data',
        notes: 'The try out button will read your current cookie data, so be sure to login first', // swagger note
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        handler: (request, h) => {
            return { auth: request.auth };
        },
    },
};
