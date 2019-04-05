const Constants = require('../../constants');

module.exports = {
    method: 'GET',
    path: '/login',
    options: {
        tags: ['api', Constants.TAGS.TEMPO],
        description: 'Temporary template route for login page',
        handler: (request, h) => {
            return h.view('login');
        },
    },
};
