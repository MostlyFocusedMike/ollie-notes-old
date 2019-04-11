const Constants = require('../../constants');

class UserAdapter {
    constructor(APIVersion = 'v1') {
        this.url = `${Constants.API_URL}/${APIVersion}/users`;
    }

    getOne(username) {
        return fetch(`${this.url}/${username}`)
            .then(r => r.json())
            .catch(console.log);
    }

    list() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

export default UserAdapter;
