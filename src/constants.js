module.exports = Object.freeze({
    API_URL: process.env.NODE_ENV === 'production' ? 'https://ollienotes.com/api' : 'http://localhost:8000/api',
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
