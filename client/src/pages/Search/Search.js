import { 
  Container, Row, Col,
  InputGroup, Input, InputGroupAddon, Button
} from 'reactstrap'
import './Search.css'

const Search = () => {

  const handleBookSearch = () => {
    
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
            <Input />
            <InputGroupAddon addonType="append" onClick=""><Button>Search Books</Button></InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Search Results</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Search