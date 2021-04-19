import { useState, useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import './Saved.css'
import axios from 'axios'

const Saved = () => {
  const [bookState, setBookState] = useState({

  }, [])



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
          <Col id="started">
            <h5>Started Books</h5>
          </Col>
          <Col id="unstarted">
            <h5>Unstarted Books</h5>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Saved