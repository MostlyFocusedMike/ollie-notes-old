const Path = require('path');
const Glue = require('glue');
const Handlebars = require('handlebars');
const Manifest = require('./manifest');
const User = require('../models/User');

exports.deployment = async (start) => {
    const manifest = Manifest.get('/');
    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    await server.initialize();

    server.views({
        engines: {
            html: {
                module: Handlebars,
                layout: true,
            },
        },
        relativeTo: Path.join(__dirname, '..', 'lib', 'templates'),
        path: '.',
        isCached: process.env.NODE_ENV === 'production',
        defaultExtension: 'html',
    });

    server.app.Database = {
        User,
    };

    if (!start) return server;

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
    return server;
};

if (!module.parent) {
    exports.deployment(true);

    process.on('unhandledRejection', (err) => {
        throw err;
    });
}
