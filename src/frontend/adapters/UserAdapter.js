class UserAdapter {
    static getOne(username) {
        return fetch(`${this.url}/${username}`, this.options)
            .then(r => r.json())
            .catch(console.log);
    }

    static list() {
        return fetch(this.url, this.options)
            .then(r => r.json())
            .catch(console.log);
    }

    static listUserNoteTitles(username) {
        console.log('the url: ', `${this.url}/${username}/note-titles`);
        return fetch(`${this.url}/${username}/note-titles`, this.options)
            .then(r => r.json())
            .catch(console.log);
    }
}

UserAdapter.url = '/api/v1/users';
UserAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default UserAdapter;
