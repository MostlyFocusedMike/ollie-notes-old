module.exports = {
    method: 'GET',
    path: '/users/{username}',
    options: {
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        handler: async (request, h) => {
            const { User } = request.server.app.Database;
            const [user] = await User
                .query()
                .where('username', '=', request.params.username);

            if (!user) { return h.redirect('/'); } // when trying to visit non-existant users page. not about auth
            const context = {
                name: user.name,
                username: user.username,
                avatar: user.avatar,
                isUser: false,
            };

            if (request.auth.isAuthenticated && request.auth.credentials.username === request.params.username) {
                context.isUser = true;
            }

            return h.view('profile', context);
        },
    },
};
