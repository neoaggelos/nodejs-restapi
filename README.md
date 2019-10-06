# Template for NodeJS Rest API

This is a template project for creating a Rest API using NodeJS + Express.

Features:
* Accepts `application/json` and `application/x-www-form-urlencoded` data.
* Setup for controllers: accept input and perform actions.
* Setup for models: handle database data.
* Setup for middleware: can be used per router, (e.g. for user authentication).
* Configurable API root.
* Greet message on `/`
* Configuration file in `node/config.js`
* Custom Error 404 middleware.
* Connection pool for MySQL database.

See [STRUCTURE.md](./STRUCTURE.md) for the project structure.

## Setup

Download packages and setup database:

```
$ npm install
$ sudo mysql -u root -p
# source ./sql/create_user.sql
```

## Run

```
$ export API_ROOT=/api
$ export PORT=3000
$ node index.js
Listening on port 3000. Api Root is '/api'
```

## Example

```
$ curl localhost:3000
Found. Redirecting to /api

$ curl localhost:3000 -L
{"name":"nodejs-restapi","version":"1.0.0","author":"Aggelos Kolaitis","api_root":"/api"}

$ curl localhost:3000/api/logout
{"status":"ERROR","message":"Not found"}

$ curl localhost:3000/api/logout -XPOST
{"status":"OK"}

$ curl localhost:3000/api/login -XPOST
{"status":false}

$ curl localhost:3000/api/login -XPOST -d 'secret_field=1'
{"status":true}

$ curl localhost:3000/api/service/123 -XPOST
{"status":"ERROR","message":"Not logged in"}

$ curl localhost:3000/api/service/123 -XPOST -d 'logged_in=1'
{"status":"ERROR","message":"Not found"}

$ curl localhost:3000/api/service/123 -XGET -d 'logged_in=1'
{"status":"OK","data":"123"}

$ curl localhost:3000/api/service/fromdb -XGET -d 'logged_in=1'
{"status":"OK","data":2}
```

Aggelos Kolaitis <neoaggelos@gmail.com>
