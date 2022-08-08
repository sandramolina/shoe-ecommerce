import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Facebook, Instagram, Twitch, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <Container className='footer' fluid>
      <Row>
        <Col className='text-center container-top'>
          <Button className='top' variant='success' />
        </Col>
      </Row>
      <Row className='text-center'>
        <Col>
          <h2 className='social-media'>FOLLOW Golden Shoe</h2>
          <Facebook size={35} className='social-media' />
          <Twitch size={35} className='social-media' />
          <Twitter size={35} className='social-media' />
          <Instagram size={35} className='social-media' />
        </Col>
        <hr />
        <Col>
          <nav>
            <h3>
              <Link to='/contact'>GET HELP</Link>
            </h3>
            <h3>
              <Link to='/faqs'>FAQs</Link>
            </h3>
            <h3>ABOUT GOLDEN SHOE</h3>
            <h3>FIND US</h3>
          </nav>
        </Col>
      </Row>
      <Row>
        <Col className='text-center py-3'>
          Made with 💜 by{' '}
          <a href='https://github.com/sandramolina'>San Molina Palencia</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
