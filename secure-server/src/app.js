const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./secure-server/src/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
const port = 3001;
server.listen(port, () => {
  console.log('http://127.0.0.1:3001/posts');
})