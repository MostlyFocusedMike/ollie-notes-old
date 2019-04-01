const hapiAuthCookie = require('hapi-auth-cookie');

const register = async (server, options) => {
    await server.register(hapiAuthCookie);

    server.auth.strategy('session', 'cookie', {
        cookie: { // @TODO note how this is an update from hapi-auth-cookie v9 https://github.com/hapijs/hapi-auth-cookie/issues/209
            name: 'session', // name of the cookie
            password: process.env.COOKIE_PSWD, // needed for cookie encoding
            isSecure: process.env.NODE_ENV === 'production', // send over http in local
        },
        validateFunc: async (request, session) => {
            /* validate the existing session on every request */
            console.log('session: ', session);
            const [user] = await request.server.app.Database.User
                .query()
                .where('username', '=', session.username);

            if (!user) return { pach: 'ok' };
            return { good: 'fling' }; // can also send credentials property
        },
    });
};

exports.plugin = {
    register,
    name: 'session',
    version: '1.0.0',
    once: true,
};
