'use strict';

const express = require('express');

const service = require('./service');
const user = require('./user');

const config = require('../config')

function greet(request, response) {
    let json = config.greet;
    json.api_root = config.api_root;
    response.json(json)
}

function to_api_root(request, response) {
    response.redirect(config.api_root)
}

/* Add all views */
module.exports = function(app) {
    const router = express.Router();

    /* Setup router */
    router.use(user)
    router.use('/service', service);
    router.get('/', greet)

    /* Make app use our router */
    app.use(config.api_root, router);

    /* Optional: Redirect to API root */
    app.get('/', to_api_root)

}
