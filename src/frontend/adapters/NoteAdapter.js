const Constants = require('../../constants');

class NoteAdapter {
    static list() {
        return fetch(this.url)
            .then(r => r.json())
            .catch(console.log);
    }
}

NoteAdapter.url = `${Constants.BACKEND_URL}/api/v1/notes`;

export default NoteAdapter;
