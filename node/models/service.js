
const db = require('./db')

module.exports = function(success, error) {
    db.query("SELECT 1 + 1 AS solution", (qerr, qres, fields) => {
        if (qerr) {
            error(qerr)
        } else {
            success(qres[0].solution)
        }
    })
}
