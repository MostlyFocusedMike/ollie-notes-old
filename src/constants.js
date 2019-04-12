module.exports = Object.freeze({
    BACKEND_URL: process.env.NODE_ENV === 'production' ? 'https://ollienotes.com/' : 'http://localhost:8000/',
    FRONT_END_URL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/',
    OAUTH_TYPES: {
        GITHUB: 'github',
    },
    TAGS: {
        USERS: 'User Routes',
        UTIL: 'Utility Routes',
        NOTES: 'Note Routes',
        AUTH: 'Auth Routes',
        STATIC: 'Static Routes',
        TEMPO: 'Temporary Routes',
    },
});
