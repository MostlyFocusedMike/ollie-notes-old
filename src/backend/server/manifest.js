require('dotenv').config();
const Confidence = require('confidence');
const Toys = require('toys');
const Path = require('path');
const Inert = require('inert');

// Glue manifest as a confidence store
module.exports = new Confidence.Store({
    server: {
        host: '0.0.0.0',
        port: {
            $env: 'PORT',
            $coerce: 'number',
            $default: 8000,
        },
        debug: {
            $filter: { $env: 'NODE_ENV' },
            $default: {
                log: ['error'],
                request: ['error'],
            },
            production: {
                request: ['implementation'],
            },
        },
        routes: {
            files: {
                relativeTo: Path.join(__dirname, '..', '..', '..', 'build'),
            },
        },
    },
    register: {
        plugins: [
            Inert, // register all plugins before Main
            {
                plugin: 'vision',
                options: {},
            },
            {
                plugin: './plugins/session',
            },
            {
                plugin: './plugins/oauth',
                options: {},
            },

            {
                plugin: '../lib', // Main plugin
                options: {},
            },
            {
                plugin: {
                    $filter: { $env: 'NODE_ENV' },
                    $default: 'hpal-debug',
                    production: Toys.noop,
                },
            },
        ],
    },
});
