import BaseAdapter from './BaseAdapter';

class NoteAdapter extends BaseAdapter {
    getOne() {
        return this.url;
    }
}

export default NoteAdapter;
