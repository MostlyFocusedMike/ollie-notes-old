module.exports = {
    // the strategy name is the file name thanks to Haute
    scheme: 'cookie',
    options: {
        password: process.env.COOKIE_PSWD, // needed for cookie encoding
        isSecure: false, // process.env.NODE_ENV === 'production', // send over http in local
        // redirectTo: '/', // redirect of failed login
        cookie: 'session', // name of the cookie

        validateFunc: async (request, session) => {
            /* validate the existing session on every request */
            console.log('session is hit: ');
            const [user] = await request.server.app.Database.User
                .query()
                .where('username', '=', session.username);
            if (!user) return { valid: false };
            return { valid: true }; // can also send credentials property
        },
    },
};
