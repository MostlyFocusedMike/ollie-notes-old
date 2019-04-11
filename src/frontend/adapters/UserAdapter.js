import BaseAdapter from './BaseAdapter';

class UserAdapter extends BaseAdapter {
    constructor() {
        super();
        this.url = `${this.url}/users`;
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
