/* eslint-disable no-undef */
const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params) // eslint-disable-line
  }
}

const error = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params) // eslint-disable-line
  }
}

module.exports = {
  info,
  error
}