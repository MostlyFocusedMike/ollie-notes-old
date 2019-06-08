const NoteDB = require('./note-db');

class Note extends NoteDB {
    static async find(id) {
        return this.query().findById(id);
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }

    static async update(note) {
        if (!note.id) return false;
        return this.query()
            .update({
                title: note.title,
                text: note.text,
            })
            .where('id', note.id);
    }
}

module.exports = Note;
