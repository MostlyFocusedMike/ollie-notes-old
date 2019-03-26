const Path = require('path');
const { Model } = require('objection');
const knex = require('../knex');

// Give the knex object to objection.
Model.knex(knex);

class User extends Model {
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
                relation: Model.HasManyRelation,
                modelClass: Path.join(__dirname, 'note'),
                join: {
                    from: 'users.id',
                    to: 'notes.user_id',
                },
            },
        };
    }
}

module.exports = User;
