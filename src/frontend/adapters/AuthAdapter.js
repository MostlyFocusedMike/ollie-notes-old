const Constants = require('../../constants');

class AuthAdapter {
    constructor(AuthVersion = 'v1') {
        this.url = `${Constants.BACKEND_URL}auth${AuthVersion}/auth/login`;
    }
}

export default AuthAdapter;
