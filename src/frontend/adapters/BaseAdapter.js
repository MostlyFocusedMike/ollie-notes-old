const Constants = require('../../constants');

class BaseAdapter {
    constructor(APIVersion = 'v1') {
        this.url = `${Constants.API_URL}/${APIVersion}`;
    }
}

export default BaseAdapter;
