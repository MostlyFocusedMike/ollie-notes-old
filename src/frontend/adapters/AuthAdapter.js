const Constants = require('../../constants');

class AuthAdapter {
    static logout() {
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
            },
        };
        return fetch(`${this.url}/logout`, options)
            .then(r => r.json())
            .then(() => localStorage.removeItem('username'));
    }
}

AuthAdapter.url = '/auth/v1';

export default AuthAdapter;
