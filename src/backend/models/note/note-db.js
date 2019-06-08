const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

class NoteDB extends Model {
    static get tableName() {
        return 'notes';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                title: { type: 'string' },
                text: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' },
            },
        };
    }

    static get relationMappings() {
        return {
            author: {
                relation: Model.HasOneThroughRelation,
                modelClass: Path.join(__dirname, '..', 'user'),
                join: {
                    from: 'notes.id',
                    through: {
                        from: 'author_notes.note_id',
                        to: 'author_notes.user_id',
                    },
                    to: 'users.id',
                },
            },
        };
    }

    static get selectedProperties() {
        const properties = [
            'id',
            'user_id',
            'title',
            'text',
        ];
        return properties.map(property => `${this.tableName}.${property}`);
    }
}

module.exports = NoteDB;
