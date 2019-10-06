'use strict';

module.exports = {
    /* Dummy authentication middleware */
    authentication: function(request, response, next) {
        if ('logged_in' in request.body) {
            next()
        } else {
            response.status(401)
            response.json({status: 'ERROR', message: 'Not logged in'})
        }
    }
}
