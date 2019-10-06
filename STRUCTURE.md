# Project structure


```
|   index.js                        Entry point for app
|   |   node/                       All JavaScript code goes here
|   |   |   config.js               Configuration
|   |   |   models/
|   |   |   |   db.js               Handles database connections
|   |   |   |   service.js          Model for some service
|   |   |   |   ....                Other models
|   |   |   controllers/
|   |   |   |   routes.js           Main controller, sets up routing
|   |   |   |   user.js             Controller for user login/logout endpoints
|   |   |   |   service.js          Controller for some service
|   |   |   |   ...                 Other controllers
|   |   |   middleware/
|   |   |   |   user.js             User middleware (e.g. check for authentication)
|   |   |   |   error.js            Error middleware (e.g. custom 404 page)
|   |   |   |   ...
|   |   sql/
|   |   |   init_db.sql             SQL for initializing database
|   |   |   ...                     Other SQL stuff
```

Aggelos Kolaitis <neoaggelos@gmail.com>
