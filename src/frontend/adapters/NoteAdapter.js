class NoteAdapter {
    static getOne(noteId) {
        return fetch(`${this.url}/${noteId}`, this.options)
            .then(r => r.json())
            .catch(console.log);
    }

    static update(note) {
        const postOptions = {
            ...this.options,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        };
        console.log('url: ', `${this.url}/${note.id}`);
        return fetch(`${this.url}/${note.id}`, postOptions)
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
