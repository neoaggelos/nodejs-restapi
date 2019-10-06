'use strict';

const pkg = require('../package.json')

module.exports = {
    db: process.env.MYSQL || 'mysql://user:pass@localhost/db?connectionLimit=0',
    port: process.env.PORT || 3000,
    api_root: process.env.API_ROOT || '/',

    greet: {
        name: pkg.name,
        version: pkg.version,
        author: pkg.author
    }
}
