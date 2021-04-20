import { 
  Container, Row, Col,
  InputGroup, Input, InputGroupAddon, Button,
  Card, CardBody, CardTitle, CardText
} from 'reactstrap'
import Book from '../../utils/BookAPI'
import { useState } from 'react'
import './Search.css'

const Search = () => {
  const [bookState, setBookState] = useState({
    search: '',
    books: []
  })

  const handleInputChange = ({ target }) => {
    setBookState({ ...bookState, search: target.value })
  }

  const handleBookSearch = event => {
    event.preventDefault()

    Book.getGoogleBooks(bookState.search)
      .then(({ data: books }) => {
        console.log(books)
        setBookState({ ...bookState, books })
      })
      .catch(err => console.log(err))
  }

  const handleSaveBook = book => {
    Book.addBook(book)
      .then(() => {
        const books = bookState.books.filter(savedBook => savedBook.id !== book.id)
        setBookState({ ...bookState, books })
      })
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>Google Books Search Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <Input
              value={bookState.search}
              onChange={handleInputChange}
            />
            <InputGroupAddon addonType="append">
              <Button onClick={handleBookSearch}>Search Books</Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Search Results</h2>
          {
            bookState.books.length ?
              bookState.books.map(book => (
                <>
                  <Row>
                    <Col>
                      <h3>{book.volumeInfo.title}</h3>
                      <img
                        src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null}
                        alt={`${book.volumeInfo.title} thumbnail`}
                      />
                    </Col>
                    <Col>
                      <Card>
                        <CardBody>
                          <CardTitle tag="h5">{book.volumeInfo.title}</CardTitle>
                          <CardText>{book.volumeInfo.description}</CardText>
                          <Button
                            onClick={() => handleSaveBook({
                              title: book.volumeInfo.title,
                              authors: book.volumeInfo.authors,
                              description: book.volumeInfo.description,
                              image: book.volumeInfo.imageLinks.thumbnail,
                              link: book.volumeInfo.previewLink
                            })}
                          >Save Book to Reading List</Button><br />
                          <Button href={book.volumeInfo.previewLink} target="_blank">View on Google Books</Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <hr />
                </>
              )) : null
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Search