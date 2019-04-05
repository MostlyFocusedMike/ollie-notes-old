module.exports = {
    method: 'GET',
    path: '/health',
    options: {
        tags: ['api'],
        description: 'Just a route to check that the server is ok',
        handler: (request, h) => {
            return {
                msg: 'looks good',
                server: request.server.info,
            };
        },
    },
};
