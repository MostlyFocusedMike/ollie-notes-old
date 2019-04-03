const Path = require('path');
const BaseModel = require('./BaseModel');

class User extends BaseModel {
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
                relation: BaseModel.HasManyRelation,
                modelClass: Path.join(__dirname, 'note'),
                join: {
                    from: 'users.id',
                    to: 'notes.user_id',
                },
            },
        };
    }

    static async findOrCreateGitHub(profile) {
        let [user] = await this.query().where('github_id', '=', profile.github_id);
        if (!user) user = await this.query().insert(profile);
        return user;
    }

    isLoggedIn(request) {
        const {
            auth: { isAuthenticated, credentials },
            params: { username },
        } = request;
        return isAuthenticated && credentials.username === username;
    }
}

module.exports = User;
