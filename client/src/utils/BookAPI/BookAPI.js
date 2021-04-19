import axios from 'axios'

const Book = {
  getGoogleBooks: search => axios.get(`/api/googleBooks/${search}`),
  getBooks: () => axios.get('/api/books'),
  addBook: book => axios.get('/api/books', book),
  deleteBook: id => axios.get(`/api/books/${id}`)
}

export default Book