module.exports = {
    method: 'GET',
    path: '/login',
    options: {
        tags: ['temp'],
        description: 'Temporary template route for login page',
        handler: (request, h) => {
            return h.view('login');
        },
    },
};
