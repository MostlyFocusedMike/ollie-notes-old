const BaseModel = require('./BaseModel');

/**
 * Class for the Note Model
 * This is a DB class, so check out the tutorial on [setting up pgAdmin]{@tutorial setting-up-pgadmin}
 * @extends BaseModel
 */
class Note extends BaseModel {
    static get tableName() {
        return 'notes';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'title',
                'user_id',
            ],

            properties: {
                id: { type: 'integer' },
                user_id: { type: 'integer' },
                title: { type: 'string' },
                text: { type: 'string' },
                oauth_type: { type: 'string' },
                created_at: { type: 'string' },
                updated_at: { type: 'string' },
            },
        };
    }
}

module.exports = Note;
