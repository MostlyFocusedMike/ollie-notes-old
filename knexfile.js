const path = require('path');

module.exports = {

    development: {
        client: 'pg',
        connection: {
            host: process.env.DEV_DB_HOST,
            port: process.env.DEV_DB_PORT,
            user: process.env.DEV_DB_USER,
            password: process.env.DEV_DB_PSWD,
            database: process.env.DEV_DB_NAME,
        },
        migrations: {
            directory: path.join(__dirname, 'src', 'backend', 'lib', 'migrations'),
        },
        seeds: {
            directory: path.join(__dirname, 'src', 'backend', 'lib', 'seeds'),
        },
    },

    //   staging: {
    //     client: 'postgresql',
    //     connection: {
    //       database: 'my_db',
    //       user:     'username',
    //       password: 'password'
    //     },
    //     pool: {
    //       min: 2,
    //       max: 10
    //     },
    //     migrations: {
    //       tableName: 'knex_migrations'
    //     }
    //   },

    //   production: {
    //     client: 'postgresql',
    //     connection: {
    //       database: 'my_db',
    //       user:     'username',
    //       password: 'password'
    //     },
    //     pool: {
    //       min: 2,
    //       max: 10
    //     },
    //     migrations: {
    //       tableName: 'knex_migrations'
    //     }
    //   }

};
