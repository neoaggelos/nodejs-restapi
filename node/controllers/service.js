'use strict';

const express = require('express');
const router = express.Router()

const user_middleware = require('../middleware/user')

const service_model = require('../models/service')

router.use(user_middleware.authentication)

router.get('/fromdb', (request, response) => {
    service_model((data) => {
        response.json({status: 'OK', data: data})
    }, (err) => {
        response.json({status: 'ERROR', message: err})
    })
})

router.get('/:data', (request, response) => {
    response.json({status: 'OK', data: request.params.data})
})

module.exports = router
