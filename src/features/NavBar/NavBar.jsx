import React from 'react';

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
    <Navbar fixed='top' bg='dark' expand='lg' variant='dark'>
      <Container fluid>
        <Navbar.Brand href='#'>Golden Shoe</Navbar.Brand>

        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='#action1'>HOME</Nav.Link>
            <NavDropdown title='PRODUCTS' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3'>ALL</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>MENS</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>WOMENS</NavDropdown.Item>
              <NavDropdown.Item href='#action4'>KIDS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#action2'>TRENDS</Nav.Link>

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
