const NoteDB = require('./note-db');

class Note extends NoteDB {
    static async all(metadata) {
        return metadata
            ? this.query
            : this.query().select('id', 'title', 'text');
    }
}

module.exports = Note;
