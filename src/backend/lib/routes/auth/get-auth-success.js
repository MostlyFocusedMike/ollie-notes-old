const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/auth-success/{username}',
    options: {
        tags: ['api', Constants.TAGS.AUTH],
        description: 'Final step of auth',
        notes: 'Requires a cookie before sending to the front end, so only the proper user can access this page',
        auth: {
            strategy: 'session',
            mode: 'required',
        },
        handler: async (request, h) => {
            const {
                auth: { credentials },
                params,
            } = request;

            if (params.username === credentials.username) return h.file('./index.html');
            return h.redirect('/login'); // in case a logged in user tries to visit another user's success page
        },
    },
};
