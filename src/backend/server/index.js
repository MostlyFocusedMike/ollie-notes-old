const Path = require('path');
const Glue = require('glue');
const Manifest = require('./manifest');

exports.deployment = async (start) => {
    const manifest = Manifest.get('/');
    const server = await Glue.compose(manifest, { relativeTo: __dirname });

    await server.initialize();

    server.views({
        engines: {
            html: {
                module: require('handlebars'),
                layout: true,
            },
        },
        relativeTo: Path.join(__dirname, '..', 'lib', 'templates'),
        path: '.',
        isCached: process.env.NODE_ENV === 'production',
        defaultExtension: 'html',
    });

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
