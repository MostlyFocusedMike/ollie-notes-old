module.exports = {
    // the strategy name is the file name thanks to Haute
    scheme: 'bell',
    options: {
        provider: 'github', // this is the OAuth provider
        clientId: process.env.CLIENT_ID, // from the GitHub application
        clientSecret: process.env.CLIENT_SECRET, // from the GitHub application
        password: process.env.OAUTH_PSWD, // for cookie encryption
        isSecure: process.env.NODE_ENV === 'production', // send over http in local
    },
};
