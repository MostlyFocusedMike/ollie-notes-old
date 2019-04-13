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
        if (!user) {
            // lowered username avoids query issues in future
            const filteredProfile = { ...profile, username: profile.username.toLowerCase() };
            user = await this.query().insert(filteredProfile);
        }
        return user;
    }

    static async allFiltered() {
        return this.query().select('id', 'github_id', 'name', 'username', 'avatar');
    }

    static async where(column, value, filter) {
        return filter
            ? this.query()
                .select('id', 'github_id', 'name', 'username', 'avatar', 'email')
                .where(column, '=', value)
            : this.query().where(column, '=', value);
    }

    isLoggedIn(request) {
        const {
            auth: { isAuthenticated, credentials },
            params: { username },
        } = request;
        return isAuthenticated && credentials.username === username;
    }

    async getNotes(filter) {
        return filter
            ? this
                .$relatedQuery('notes')
                .select('id', 'title', 'text')
            : this.$relatedQuery('notes');
    }
}

module.exports = User;
