import axios from 'axios'

const Book = {
  getGoogleBooks: search => axios.get(`/api/googleBooks/${search}`),
  getBooks: () => axios.get('/api/books'),
  addBook: book => axios.post('/api/books', book),
  deleteBook: id => axios.delete(`/api/books/${id}`)
}

export default Book