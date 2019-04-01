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

            const cookie = request.state.session;
            console.log('cookie: ', cookie);
            console.log('user: ', user);
            if (!user) { return h.redirect('/'); } // when trying to visit non-existant users page. not about auth
            const context = {
                name: user.name,
                username: user.username,
                avatar: user.avatar,
                isUser: false,
            };

            console.log('request.auth.isAuthenticated: ', request.auth.isAuthenticated);

            if (request.auth.isAuthenticated && request.auth.credentials.username === request.params.username) {
                console.log('hit: ');
                context.isUser = true;
            }

            return h.view('profile', context);
        },
    },
};
