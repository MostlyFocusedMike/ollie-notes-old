# Ollie Notes
A nice way to take some notes. This Markdown editor makes it easy to collect your thoughts with a simple interface and helpful plugins.

# Getting Started with Local Development
To get started, just clone down the repo and then run the kickoff script with:

```bash
npm run kickoff
```

If you look in the script, it's just doing a few simple things to get you up and running:
- create a `.env` file from the `.sample.env` file
- Build all the containers
- Run the DB migrations
- Seed the DB
- actually start the project

Then, all you need to do is go to
```bash
http://localhost:3000
```

There you have it, your local dev environment is set up.

# Using Real Auth
Ollie Notes uses OAuth through GitHub to avoid storing sensitive user data in its DB.
The keys for this service can't be stored publicly, but without those keys the app wouldn't be able to run. In order to get around this, we use a stub function for auth in local dev.

This stub function uses a bogus id and secret if a the `SEED_USER_GITHUB_ID` environment variable is set. If it is, Ollie Notes will then use that id and return the seed user's data to the rest of the app. Because of this function, our auth route never actually hits GitHub, so our fake id and secret never cause problems.

This is fine if you just want to clone down the repo and mess around, but if you actually want to be able to do the full auth with real GitHub accounts, the id and secret are available on request, just email mostlyfocusedmike@gmail.com for more information.


[swagger docs](http://localhost:8000/swagger)


## Useful extras
`npx sort-package-json` this alphabetizes the package.json