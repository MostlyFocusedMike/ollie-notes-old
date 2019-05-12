const Constants = require('../../../../constants');

module.exports = {
    method: 'POST',
    path: '/auth/v1/logout',
    options: {
        tags: ['api', Constants.TAGS.AUTH],
        description: 'Logout page that clears the session cookie',
        notes: "Be careful, that 'try out' button will actually log you out", // swagger note
        auth: 'session',
        handler: (request, h) => {
            request.cookieAuth.clear();
            console.log('request.auth: ', request.auth);
            console.log('logged out: ');
            return { msg: 'Logged Out' };
        },
    },
};
