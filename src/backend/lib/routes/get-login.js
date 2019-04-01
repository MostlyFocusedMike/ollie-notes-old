module.exports = {
    method: 'GET',
    path: '/login',
    options: {
        handler: (request, h) => {
            return h.view('login');
        },
    },
};
