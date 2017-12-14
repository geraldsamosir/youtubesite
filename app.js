// server.js
const next = require('next')
const routes = require('./router')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const port = process.env.PORT || 3000

const handler = routes.getRequestHandler(app)


// Without express
const {createServer} = require('http')
app.prepare().then(() => {
    createServer(handler).listen(port)
})