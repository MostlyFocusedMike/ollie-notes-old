# Adding plugins
- there are so many different ways to do it
- haute is lib/plugins and it's expecting one of several different object configs
  - it's essentially just exporting the plugins object for `server.register`
```js
module.exports = {
    plugins: [
        {
            // a plugin object
        }
    ],
    options: {
        hapi register options
    }
}

module.exports = {
    plugins: [
        {
            plugin: {
                // a plugin object
            },
            options: {

            }
        }
    ],
    options: {
        hapi register options
    }
}

// if plugins is an object, not an array, it will try requiring a package with
// the file name and as if you did plugins: {plugin: require('plugin-name')}
module.exports = {
    plugins: {
        options: {
            // the plugin options
        }
    }
}

```

- however, you can also require packages in the manifest, which uses Glue to
  require packages