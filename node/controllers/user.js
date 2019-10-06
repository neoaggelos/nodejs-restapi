'use strict';

const express = require('express');
const router = express.Router()

router.post('/login', (request, response) => {
    response.json({status: 'secret_field' in request.body});
})

router.post('/logout', (request, response) => {
    response.json({status: 'OK'});
})

module.exports = router
