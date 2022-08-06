import React from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';
import { ReactComponent as ShoppingBag } from '../../img/shoppingbag.svg';

function NavBar() {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container fluid>
        <Link to='/'>
          <Navbar.Brand>Golden Shoe</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>HOME</Nav.Link>
            <NavDropdown title='PRODUCTS' id='navbarScrollingDropdown'>
              <NavDropdown.Item as={Link} to='/products'>
                ALL
              </NavDropdown.Item>
              <NavDropdown.Item>MENS</NavDropdown.Item>
              <NavDropdown.Item>WOMENS</NavDropdown.Item>
              <NavDropdown.Item>KIDS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>TRENDS</Nav.Link>

            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='success'>Search</Button>
            </Form>
          </Nav>
        </Navbar.Collapse>

        <ShoppingBag className='bag' />
      </Container>
    </Navbar>
  );
}

export default NavBar;
