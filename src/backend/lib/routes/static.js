const Constants = require('../constants');

module.exports = {
    method: 'GET',
    path: '/{param*}',
    options: {
        tags: ['api', Constants.TAGS.STATIC],
        description: 'Static asset delivery diractory',
        notes: "This route uses hapi's Inert plugin to serve static content",
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
            },
        },
    },
};
