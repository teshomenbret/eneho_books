import React from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';

import Logo from '../images/logo.jpg'

const CustomeNavBar = () => {
  return (
    <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">
            <img src={Logo}
                width='50'
                height='50'
                alt='Enho bookstore logo'
                className='rounded-circle'/>{' '}
            EnhoBooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/aboutUs'>About Us</Nav.Link>
            <Nav.Link as={Link} to='/events'>Events</Nav.Link>
            <Nav.Link as={Link} to='/books'>Books</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href=''>
                <Button variant='outline-secondary'>Login</Button>
            </Nav.Link>
            <Nav.Link href=''>
                <Button variant='outline-secondary'>SignUp</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default CustomeNavBar;