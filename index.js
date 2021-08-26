/* const app = require('./app')
const http = require('http')

//työkalut:
const logger = require('./backend/utils/logger')
const config = require('./backend/utils/config')

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const server = http.createServer(app)
  server.listen(config.PORT, () => {
    logger.info(`Palvelin on käynnissä portissa ${config.PORT}`)
  })
} else { */
/* const DIST_PATH = path.resolve(__dirname, './dist')
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (req, res) => res.sendFile(INDEX_PATH)) */
//}
