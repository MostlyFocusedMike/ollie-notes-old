module.exports = {
    method: 'GET',
    path: '/{param*}',
    options: {
        tags: ['static'],
        description: 'Static asset delivery diractory',
        handler: {
            directory: {
                path: '.',
                redirectToSlash: true,
            },
        },
    },
};
