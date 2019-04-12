const Constants = require('../../constants');

class UserAdapter {
    constructor(APIVersion = '/v1') {
        this.url = `${Constants.BACKEND_URL}api${APIVersion}/users`;
    }

    getOne(username) {
        return fetch(`${this.url}/${username}`)
            .then(r => r.json())
            .catch(console.log);
    }

    list() {
        console.log('this.url: ', this.url);
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

export default UserAdapter;
