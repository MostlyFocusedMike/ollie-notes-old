const Constants = require('../constants.js');

module.exports = {
    method: 'GET',
    path: '/auth/github',
    options: {
        auth: 'github',
        tags: ['auth'],
        description: 'The callback url for GitHub OAuth',
        handler: async (request, h) => {
            if (request.auth.isAuthenticated) {
                // the profile info sent from GitHub
                const { profile } = request.auth.credentials;
                const userProfile = {
                    github_id: profile.id,
                    name: profile.displayName,
                    username: profile.username,
                    avatar: profile.raw.avatar_url,
                    email: profile.email,
                    oauth_type: Constants.OAUTH_TYPES.GITHUB,
                };

                const userDB = request.server.app.Database.User;
                const user = await userDB.findOrCreateGitHub(userProfile);

                request.cookieAuth.set({ username: user.username });
                return h.redirect(`/users/${userProfile.username}`);
            }

            return h.view('login', {
                err: 'Could not authenticate with GitHub.',
            }).code(400);
        },
    },
};
