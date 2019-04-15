const Constants = require('../../constants');

class UserAdapter {
    constructor(APIVersion = '/v1') {
        this.url = `${Constants.BACKEND_URL}api${APIVersion}/users`;
    }

    getOne(username) {
        const options = {
            method: 'GET',
            credentials: 'include', // fetch doesn't include cookies by default
            // mode: 'no-cors',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        };
        return fetch(`${this.url}/${username}`, options)
            .then((r) => {
                console.log('r:', r);
                return r;
            })
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
