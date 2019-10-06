'use strict';

const express = require('express');
const routes = require('./node/controllers/routes')
const error_middleware = require('./node/middleware/error')

const config = require('./node/config')

/* Setup application */
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* Setup routing */
routes(app);

/* 404 page */
app.use(error_middleware.not_found)

/* Listen */
app.listen(config.port, () => {
    console.log(`Listening on port ${config.port}. Api Root is '${config.api_root}'`)
});
