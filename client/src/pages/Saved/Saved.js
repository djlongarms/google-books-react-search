import { useState, useEffect } from 'react'
import {
  Container, Col, Row,
  Card, CardBody, CardTitle, CardSubtitle, CardText, Button
} from 'reactstrap'
import './Saved.css'
import Book from '../../utils/BookAPI'

const Saved = () => {
  const [bookState, setBookState] = useState({
    books: []
  }, [])

  const handleDeleteBook = id => {
    Book.deleteBook(id)
      .then(() => {
        const books = bookState.books.filter(book => book._id !== id)
        setBookState({ ...bookState, books })
      })
  }

  useEffect(() => {
    Book.getBooks({})
      .then(({ data: books }) => {
        setBookState({ ...bookState, books })
      })
      .catch(err => console.log(err))
  })

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Google Books Reading List</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Your Saved Books</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {
              bookState.books.length ?
                bookState.books.map(book => (
                  <>
                    <Row>
                      <Col>
                        <h3>{book.title}</h3>
                        <img
                          src={book.image}
                          alt={`${book.title} thumbnail`}
                        />
                      </Col>
                      <Col>
                        <Card>
                          <CardBody>
                            <CardTitle tag="h5">{book.title}</CardTitle>
                            <CardSubtitle>{book.authors}</CardSubtitle>
                            <CardText>{book.description}</CardText>
                            <Button onClick={() => handleDeleteBook(book._id)}>Remove From Reading List</Button>
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
    </>
  )
}

export default Saved