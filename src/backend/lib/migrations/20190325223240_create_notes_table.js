exports.up = (knex, Promise) => {
    return knex.schema.createTable('notes', (table) => {
        table.increments().primary();
        table.string('title').notNullable();
        table.string('text');
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('notes');
};
