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

    static async all(metadata) {
        return metadata
            ? this.query()
            : this.query().select('id', 'github_id', 'name', 'username', 'avatar');
    }

    static async where(column, value) {
        return this.query()
            .select('id', 'github_id', 'name', 'username', 'avatar', 'email')
            .where(column, '=', value);
    }

    async getNotes(metadata) {
        return metadata
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
