module.exports = {
    method: 'GET',
    path: '/users/{username}',
    options: {
        tags: ['temp', 'api'],
        description: 'Get user profile info', // will be converted to API instead of template,
        auth: {
            strategy: 'session',
            mode: 'try',
        },
        handler: async (request, h) => {
            const {
                params: { username },
                server: { app: { Database: { User } } },
            } = request;

            const [user] = await User.where('username', username);
            if (!user) return h.redirect('/'); // when trying to visit non-existant users page. not about auth

            const context = {
                name: user.name,
                username: user.username,
                avatar: user.avatar,
            };
            if (user.isLoggedIn(request)) context.isUser = true;
            return h.view('profile', context);
        },
    },
};
