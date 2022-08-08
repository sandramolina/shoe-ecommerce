import React from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './NavBar.css';
import { ReactComponent as ShoppingBag } from '../../img/shoppingbag.svg';

import { openCart } from '../Cart/CartModal/CartModalSlice';

function NavBar() {
  const dispatch = useDispatch();
  const clickOnCart = () => dispatch(openCart());

  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>
          Golden Shoe
        </Navbar.Brand>

        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>
              HOME
            </Nav.Link>
            <NavDropdown title='PRODUCTS' id='navbarScrollingDropdown'>
              <NavDropdown.Item as={Link} to='/products'>
                ALL
              </NavDropdown.Item>
              <NavDropdown.Item>MENS</NavDropdown.Item>
              <NavDropdown.Item>WOMENS</NavDropdown.Item>
              <NavDropdown.Item>KIDS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to='/contact'>
              GET HELP
            </Nav.Link>
            <Nav.Link as={Link} to='/faqs'>
              FAQs
            </Nav.Link>

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
        <ShoppingBag className='bag' onClick={clickOnCart} />
        <Navbar.Toggle aria-controls='navbarScroll' />
      </Container>
    </Navbar>
  );
}

export default NavBar;
