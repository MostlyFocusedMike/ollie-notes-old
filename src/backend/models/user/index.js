const UserDB = require('./user-db');

class User extends UserDB {
    static async findOrCreateGitHub(profile) {
        let [user] = await this.query().where('github_id', '=', profile.github_id);
        if (!user) {
            // lowered username avoids query issues in future
            const filteredProfile = { ...profile, username: profile.username.toLowerCase() };
            user = await this.query().insert(filteredProfile);
        }
        return user;
    }

    static async all(includeMetadata) {
        return includeMetadata
            ? this.query()
            : this.query().select(...this.selectedProperties);
    }

    static async where(column, value, includeMetadata) {
        return includeMetadata
            ? this.query()
                .where(column, '=', value)
            : this.query()
                .select(...this.selectedProperties)
                .where(column, '=', value);
    }

    async getNotes(includeMetadata) {
        return includeMetadata
            ? this.$relatedQuery('notes')
            : this
                .$relatedQuery('notes')
                .select('id', 'title', 'text');
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
