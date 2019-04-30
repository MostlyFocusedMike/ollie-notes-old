const Constants = require('../../constants');

class AuthAdapter {
    static logout() {
        const options = {
            method: 'POST',
            credentials: 'include',
        };
        return fetch(`${this.url}/logout`, options)
            .then(r => r.json())
            .then(() => localStorage.removeItem('username'));
    }
}

AuthAdapter.url = `${Constants.BACKEND_URL}auth/v1`;

export default AuthAdapter;
