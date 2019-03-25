# Random things
There are just things you thought you should jot down

## Directory error
When trying to use the directory handler with inert, it failed because inert was
registered after the main app. For some reason h.file was fine, but to get the
directory handler to work, I had to register Inert before the main lib. This
seems like best practice anyway

## Error: Cannot find module 'bossy'
This shouldn't pop up again, but for some reason this error kept popping up.
I don't know which package would ever need to use it, it's a CLI parser,
or why it only occurs sometimes and not others, so I just loaded
it as a devdependency and moved on