module.exports = require('mongoose').connect(process.env.MONGODB.URI || 'mongodb://localhost/googlebooks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})