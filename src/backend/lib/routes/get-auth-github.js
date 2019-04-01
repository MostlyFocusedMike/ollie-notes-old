const Constants = require('../constants.js');

module.exports = {
    method: 'GET',
    path: '/auth/github',
    options: {
        auth: 'github',
        handler: async (request, h) => {
            if (request.auth.isAuthenticated) {
                const { profile } = request.auth.credentials;
                const { User } = request.server.app.Database;
                const data = {
                    github_id: profile.id,
                    name: profile.displayName,
                    username: profile.username,
                    avatar: profile.raw.avatar_url,
                    email: profile.email,
                    oauth_type: Constants.OAUTH_TYPES.GITHUB,
                };

                const [user] = await User
                    .query()
                    .where('github_id', '=', data.github_id);

                if (!user) {
                    await User
                        .query()
                        .insert(data);
                }
                request.cookieAuth.set({ username: data.username });
                return h.redirect(`/users/${data.username}`);
            }

            return h.view('login', {
                err: 'Could not authenticate with GitHub.',
            }).code(400);
        },
    },
};
