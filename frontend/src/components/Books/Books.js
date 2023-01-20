import React from 'react'
import Book from './Book';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Books = () => {
  return (
    <>
      <Link to='/addbook'><Button variant='success' className='m-5'>Add New Book</Button></Link>
      <Row className='m-5 text-center'>
        <Col><Book/></Col>
        <Col><Book/></Col>
      </Row>
    </>
  )
}

export default Books;