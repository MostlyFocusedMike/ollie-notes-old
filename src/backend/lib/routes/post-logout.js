module.exports = {
    method: 'POST',
    path: '/logout',
    options: {
        tags: ['auth'],
        description: 'Logout page that clears the session cookie',
        auth: 'session',
        handler: (request, h) => {
            request.cookieAuth.clear();
            return h.redirect('/login');
        },
    },
};
