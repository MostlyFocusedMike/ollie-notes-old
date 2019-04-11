const Constants = require('../../constants.js');
const User = require('../../models/user');

exports.seed = async (knex) => {
    /* Using objection we can neatly create one file with all our relationships built dynamically */
    await knex('users').del(); // our cascade delete protects us from having to delete child notes first

    await User
        .query()
        .insertGraph([
            {
                github_id: 11111111, // github id's are 8 digit ints
                name: 'Mr. Fakerino',
                username: 'fake_1',
                avatar: 'https://www.catster.com/wp-content/uploads/2015/06/6becb852b27e1d80fbd03048dfb377a5_1273011771.jpg',
                email: 'mostlyfocusedmike+fakeuser1@gmail.com',
                oauth_type: Constants.OAUTH_TYPES.GITHUB,
                notes: [
                    {
                        title: '1st note titlerino',
                        text: "# I am the first user's first note. SMASHING",
                    },
                    {
                        title: '2nd note title is this one yall',
                        text: "# I am the first user's second note! YES",
                    },
                ],
            },
            {
                github_id: 22222222,
                name: "Noreal O'Fakerson",
                username: 'fake_2',
                avatar: 'https://www.petbucket.com/resources/18/160536/picture/2F/85854511.jpg',
                email: 'mostlyfocusedmike+fakeuser2@gmail.com',
                oauth_type: Constants.OAUTH_TYPES.GITHUB,
                notes: [
                    {
                        title: '3rd note title is in the house',
                        text: "# I am the second user's beloved first note",
                    },
                ],
            },
        ]);
};
