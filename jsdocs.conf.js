module.exports = {
    tags: {
        allowUnknownTags: true,
        dictionaries: ['jsdoc'],
    },
    source: {
        include: ['./src', './package.json', './README.md'],
        includePattern: '.js$',
        excludePattern: '(node_modules/|docs)',
    },
    plugins: [
        'plugins/markdown',
    ],
    templates: {
        cleverLinks: false,
        monospaceLinks: true,
        useLongnameInNav: false,
        showInheritedInNav: true,
        systemName: 'Ollie Notes',
        systemSummary: 'A nice way to take your coding notes',
    },
    opts: {
        destination: './docs',
        encoding: 'utf8',
        private: true,
        recurse: true,
        template: './node_modules/foodoc/template',
        tutorials: './docs/tutorials',
    },
};
