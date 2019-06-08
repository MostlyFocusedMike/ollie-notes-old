const NoteDB = require('./note-db');

class Note extends NoteDB {
    static async find(id) {
        return this.query().findById(id);
    }
}

module.exports = Note;
