class AuthAdapter {
    static logout(context) {
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
                accepts: 'application/json',
            },
        };
        return fetch(`${this.url}/logout`, options)
            .then(r => r.json())
            .then(() => localStorage.removeItem('username'))
            .then(() => context.setLoggedInUser(''));
    }

    static setLoggedInUser(context, username) {
        localStorage.username = username;
        context.setLoggedInUser(username);
    }

    static checkLoggedIn(context) {
        if (localStorage.username) context.setLoggedInUser(localStorage.username);
    }
}

AuthAdapter.url = '/auth/v1';

export default AuthAdapter;
