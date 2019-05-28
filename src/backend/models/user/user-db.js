const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

Model.knex(knex); // Give the knex object to objection.

class UserDB extends Model {
    static get tableName() {
        return 'users';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'username',
                'email',
                'oauth_type',
            ],

            properties: {
                id: { type: 'integer' },
                github_id: { type: 'integer' },
                name: { type: 'string' },
                username: { type: 'string' },
                avatar: { type: 'string' },
                email: { type: 'string' },
                oauth_type: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' },
            },
        };
    }

    static get relationMappings() {
        return {
            notes: {
                relation: Model.ManyToManyRelation,
                modelClass: Path.join(__dirname, '..', 'note'),
                join: {
                    from: 'users.id',
                    through: {
                        from: 'author_notes.user_id',
                        to: 'author_notes.note_id',
                    },
                    to: 'notes.id',
                },
            },
        };
    }

    static get selectedProperties() {
        const properties = [
            'id',
            'github_id',
            'name',
            'username',
            'avatar',
            'email',
        ];
        return properties.map(property => `${this.tableName}.${property}`);
    }
}

module.exports = UserDB;
