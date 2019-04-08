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
        systemColor: '#5611A4', // highlights and header BG color
        navMembers: [
            // these are the defaults for future reference
            // { kind: 'class', title: 'Classes', summary: 'All documented classes.' },
            // { kind: 'external', title: 'Externals', summary: 'All documented exteral members.' },
            // { kind: 'global', title: 'Globals', summary: 'All documented globals.' },
            // { kind: 'mixin', title: 'Mixins', summary: 'All documented mixins.' },
            // { kind: 'interface', title: 'Interfaces', summary: 'All documented interfaces.' },
            // { kind: 'module', title: 'Modules', summary: 'All documented modules.' },
            // { kind: 'namespace', title: 'Namespaces', summary: 'All documented namespaces.' },
            { kind: 'tutorial', title: 'Tutorials And Guides', summary: 'All available tutorials.' },
        ],
        stylesheets: [
            'css/overide.css',
        ],
    },
    opts: {
        destination: './docs/site',
        encoding: 'utf8',
        private: true,
        recurse: true,
        template: './node_modules/foodoc/template',
        tutorials: './docs/tutorials',
    },
};
