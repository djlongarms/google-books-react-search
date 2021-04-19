const router = require('express').Router()
const { Book } = require('../models')
const axios = require('axios')

router.get('/googleBooks/:search', (req, res) => {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&maxResults=20&apikey=${process.env.googleBooksAPIKey}`)
    .then(({ data: { items: books }}) => {
      res.json(books)
      res.sendStatus(200)
    })
    .catch(err => console.log(err))
})

module.exports = router