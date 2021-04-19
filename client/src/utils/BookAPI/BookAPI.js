import axios from 'axios'

const Book = {
  getBook: search => axios.get(`/api/googleBooks/${search}`)
}

export default Book