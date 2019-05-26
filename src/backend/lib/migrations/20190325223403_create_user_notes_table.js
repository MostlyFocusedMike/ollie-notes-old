exports.up = (knex) => {
    return knex.schema.createTable('user_notes', (table) => {
        table.increments().primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); // cascade deletes this join when the foreign row is deleted
        table.integer('note_id').unsigned().notNullable();
        table.foreign('note_id').references('id').inTable('notes').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('user_notes');
};
