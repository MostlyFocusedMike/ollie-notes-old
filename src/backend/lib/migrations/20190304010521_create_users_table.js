exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary();
        table.string('github_id').notNullable();
        table.string('username').notNullable();
        table.string('avatar').defaultTo('https://cdn-images-1.medium.com/fit/c/200/200/1*_fyQhg7HIyLJbw-tdFBxXA.png');
        table.string('email').notNullable();
        table.string('oauth_type').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users');
};
