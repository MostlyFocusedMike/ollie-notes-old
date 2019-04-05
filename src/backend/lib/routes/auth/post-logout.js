const Constants = require('../../constants');

module.exports = {
    method: 'POST',
    path: '/logout',
    options: {
        tags: ['api', Constants.TAGS.AUTH],
        description: 'Logout page that clears the session cookie',
        auth: 'session',
        handler: (request, h) => {
            request.cookieAuth.clear();
            return h.redirect('/login');
        },
    },
};
