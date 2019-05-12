const Constants = require('../../../../constants');

module.exports = {
    method: 'GET',
    path: '/auth/v1/github',
    options: {
        auth: 'github',
        tags: ['api', Constants.TAGS.AUTH],
        description: 'The callback url for GitHub OAuth',
        handler: async (request, h) => {
            const {
                auth: { isAuthenticated, credentials: { profile } },
                server: { app: { Database: { User } } },
                cookieAuth,
            } = request;

            if (isAuthenticated) {
                // the profile info sent from GitHub
                const userProfile = {
                    github_id: profile.id,
                    name: profile.displayName,
                    username: profile.username,
                    avatar: profile.raw.avatar_url,
                    email: profile.email,
                    oauth_type: Constants.OAUTH_TYPES.GITHUB,
                };

                const user = await User.findOrCreateGitHub(userProfile);

                cookieAuth.set({ username: user.username });
                return h.redirect(`${Constants.FRONTEND_URL}/auth-success/${user.username}`);
            }

            return h.view('login', {
                err: 'Could not authenticate with GitHub.',
            }).code(400);
        },
    },
};
