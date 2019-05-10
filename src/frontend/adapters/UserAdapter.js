class UserAdapter {
    static getOne(username) {
        const options = {
            method: 'GET',
            credentials: 'include', // fetch doesn't include cookies by default
            headers: {
                accepts: 'application/json',
            },
        };
        return fetch(`${this.url}/${username}`, options)
            .then(r => r.json())
            .catch(console.log);
    }

    static list() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

UserAdapter.url = '/api/v1/users';

export default UserAdapter;
