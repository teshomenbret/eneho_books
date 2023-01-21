import React from 'react'
import Card from 'react-bootstrap/Card';
import Temsalet from '../../images/temsalet-Book.jpg'
import Button from 'react-bootstrap/Button';

const Book = ({book}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.photo.data} />
      <Card.Body>
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default Book;