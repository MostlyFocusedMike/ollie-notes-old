const Constants = require('../../constants');

class UserAdapter {
    static getOne(username) {
        const options = {
            method: 'GET',
            credentials: 'include', // fetch doesn't include cookies by default
        };
        return fetch(`${this.url}/${username}`, options)
            .then((r) => {
                console.log('r:', r);
                return r;
            })
            .then(r => r.json())
            .catch(console.log);
    }

    static list() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }

    static setCurrentUser(user) {
        if (user.isUser && !localStorage.username) localStorage.username = user.username;
    }

    static isCurrentUserSet() {
        return !!localStorage.username;
    }
}

UserAdapter.url = `${Constants.BACKEND_URL}api/v1/users`;

export default UserAdapter;
