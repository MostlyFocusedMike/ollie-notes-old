class NoteAdapter {
    static getOne(noteId) {
        return fetch(`${this.url}/${noteId}`, this.options)
            .then(r => r.json())
            .catch(console.log);
    }
}

NoteAdapter.url = '/api/v1/notes';
NoteAdapter.options = {
    method: 'GET',
    credentials: 'include', // fetch doesn't include cookies by default
    headers: {
        accepts: 'application/json',
    },
};

export default NoteAdapter;
