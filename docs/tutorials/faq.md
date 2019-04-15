When a you jump into a new project, you tend to have a lot of questions. Some of them are big picture stuff, achitecture and stack and whatnot. But sometimes, there are just questions about random things that just pop up in the code base. Why is a file in a certain place? Was that a naming convention? Why that particular external library? This page is all about those things.

# What does wait-for-it.sh do?

The issue is that when our `web` container tries to talk to our `db` to do the migrations and seeds in the kickoff script, there's
nothing happening at port 5432 yet. This is becuase docker-compose's `depends_on` will start our `db` container before `web`, but it won't wait for `db`'s postgress to acually be "ready" before moving on. This is a problem becuase the kickoff script will try to run the migrations and seeds immediately and hit this error:

```plaintext
Error: connect ECONNREFUSED [some ip address]:5432
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1087:14)
Also known as: DB won't connect on start
```

The solution (for now), is to tell those commands to hang on a second. To do this we are using a great script called [wait-for-it by vishnubob](https://github.com/vishnubob/wait-for-it). Basically all this script does is delay them until `db:5432` is actually ready. Here's the lines:

```docker
# from docker-compose.yml
command: ./scripts/wait-for-pg.sh db:5432 -- nodemon /usr/app/src/backend/server
```

This issue is [discussed by docker and is called startup order](https://docs.docker.com/compose/startup-order/) and you can even see the postgres image talk about this problem in the [caveats section of pg's docker page](https://hub.docker.com/_/postgres)

# What are the credentials on these fetch requests? (CORS side note)
Our front and back end are on the same server becuase we want to keep auth simple and use cookies for sessions. However, fetch does not automatically include any sort of cookie data out of the box. In order to use cookies with fetch you have to do:

```js
fetch('ur', {
    credentials: 'include',
    // other fetch option data
})
```

## CORS issues
We have not yet solved the port issue (dev uses webpack server on 3000, actual app build runs on port 8000), which is a shame becuase using cookies _really_ irritates CORS . Hapi won't be able to get around it by just using `cors: false` anymore. Instead the `cors` property in the route options has to look like:

```js
cors: {
    origin: ['*'],
    headers: ['Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'],
    credentials: true,
},
```

Ideally, we can remove this once we properly figure out how to use reverse proxy's for local development so we aren't going from 3000 on the front to 8000 on the back.