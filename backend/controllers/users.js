const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.post('/', async (req, res) => {
  const body = req.body

  if (body.password === undefined || body.password.length < 3) {
    return res.status(400).json({ virhe: 'Salasanan on oltava vähintään kolme merkkiä pitkä.' })
  }

  const saltRounds = 10
  const password = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    nimi: body.nimi,
    password,
  })

  const tallennettuKayttaja = await user.save()

  res.json(tallennettuKayttaja)
})

userRouter.get('/', async (req, res) => {
  const users = await User.find({}).populate('blogit', { url: 1, title: 1, author: 1 })
  res.json(users.map(u => u.toJSON()))
})

module.exports = userRouter