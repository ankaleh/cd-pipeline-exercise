/* eslint-disable no-undef */
const path = require('path')
const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')
//työkalut:
const config = require('./backend/utils/config')
const logger = require('./backend/utils/logger')
const middleware = require('./backend/utils/middleware')

//kontrolleri:
const blogsRouter = require('./backend/controllers/blogs')
const userRouter = require('./backend/controllers/users')
const loginRouter = require('./backend/controllers/login')
//tietokanta:
const mongoose = require('mongoose')
const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Yhditetty MOngoDB:hen.')
  })
  .catch((error) => {
    logger.error('Virhe yhdistettäessä MongoDB:hen: ', error.message)
  })

//middlewaret käyttöön (suoritetaan järjestyksessä, jossa ne annetaan):
app.use(cors())
app.use(express.json()) //Expressin json-parseri ottaa pyynnön mukana tulevan datan (JSON), muuttaa sen JS-olioksi ja sijoittaa request-olion kenttään body ennen kuin Routeria kutsutaan.

app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogsRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./backend/controllers/testing')
  app.use('/api/testing', testingRouter)
}

if (process.env.NODE_ENV === 'production') {
  const BUILD_PATH = path.resolve(__dirname, './build')
  console.log('polku buildiin: ', BUILD_PATH) // eslint-disable-line
  app.use(express.static(BUILD_PATH))
  //app.use(express.static('build'))
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, './build/index.html'))
  })
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const http = require('http')

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const server = http.createServer(app)
  server.listen(config.PORT, () => {
    logger.info(`Palvelin on käynnissä portissa ${config.PORT}`)
  })
} else {
  app.listen(config.PORT, () => {
    console.log(`server started on port ${config.PORT}`) // eslint-disable-line
  })
}