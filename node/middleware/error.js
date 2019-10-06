'use strict';

module.exports = {
    /* Dummy authentication middleware */
    not_found: function(request, response, next) {
        response.status(404)
        response.json({status: 'ERROR', message: 'Not found'})
    }
}
