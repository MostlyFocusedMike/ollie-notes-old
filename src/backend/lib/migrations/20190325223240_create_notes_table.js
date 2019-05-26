exports.up = (knex, Promise) => {
    return knex.schema.createTable('notes', (table) => {
        table.increments().primary();
        table.string('title').notNullable();
        table.string('text');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('notes');
};
