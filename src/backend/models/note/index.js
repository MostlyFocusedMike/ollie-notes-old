const NoteDB = require('./note-db');

class Note extends NoteDB {
    static async all(includeMetadata) {
        return includeMetadata
            ? this.query
            : this.query().select(...this.selectedProperties);
    }
}

module.exports = Note;
