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
        console.log('this.url: ', this.url);
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

UserAdapter.url = `${Constants.BACKEND_URL}api/v1/users`;

export default UserAdapter;
