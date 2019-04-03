const Bell = require('bell');
const User = require('../../models/User');

// quickly swap between fake users for dev and testing
// process.env.SEED_USER_GITHUB_ID = 11111111;
// process.env.SEED_USER_GITHUB_ID = 22222222;

module.exports = {
    name: 'oauth',
    async register(server) {
        /*  when seeding fake users, we don't have real github accounts to match
            so in dev, set the variable to use the override function 'simulate()'
        */
        if (process.env.SEED_USER_GITHUB_ID) {
            Bell.simulate(async (request) => {
                const [seedUser] = await User
                    .query()
                    .where('github_id', '=', process.env.SEED_USER_GITHUB_ID);

                // we return the required parts from the data github sends
                return {
                    provider: 'github',
                    query: {},
                    token: 'faketoken',
                    refreshToken: undefined,
                    expiresIn: undefined,
                    profile: {
                        id: seedUser.github_id,
                        name: seedUser.name,
                        username: seedUser.username,
                        displayName: seedUser.name,
                        email: seedUser.email,
                        raw: {
                            avatar_url: seedUser.avatar,
                        },
                    },
                };
            });
        }

        await server.register(Bell);

        server.auth.strategy('github', 'bell', {
            provider: 'github', // this is the OAuth provider
            password: process.env.OAUTH_PSWD, // for cookie encryption
            clientId: process.env.CLIENT_ID, // from the GitHub application
            clientSecret: process.env.CLIENT_SECRET, // from the GitHub application
            isSecure: process.env.NODE_ENV === 'production', // send over http in local
        });
    },
    version: '1.0.0',
    once: true,
};
