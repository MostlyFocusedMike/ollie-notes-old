const Constants = require('../../constants');

class NoteAdapter {
    constructor(APIVersion = 'v1') {
        this.url = `${Constants.API_URL}/${APIVersion}/notes`;
    }

    list() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

export default NoteAdapter;
