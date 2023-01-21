import React from 'react'
import Logo from '../../images/logo.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Event = ({eventObj}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={eventObj.image} />
      <Card.Body>
        <Card.Title>{eventObj.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  )
}

export default Event;