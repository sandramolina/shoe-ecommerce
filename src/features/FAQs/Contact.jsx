import React from 'react';
import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './Contact.css';

const Contact = () => {
  return (
    <Container id='contact-form'>
      <Form>
        <h2> Submit a Request</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>
            Your Email address<span>*</span>
          </Form.Label>
          <Form.Control type='email' placeholder='name@example.com' required />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            First name<span>*</span>
          </Form.Label>
          <Form.Control required type='text' placeholder='First name' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            Last name<span>*</span>
          </Form.Label>
          <Form.Control required type='text' placeholder='Last name' />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            How can we help you today?<span>*</span>
          </Form.Label>
          <select required>
            <option>-</option>
            <option>Orders and Payments</option>
            <option>Returns</option>
            <option>Shipping</option>
            <option>General Enquiries</option>
          </select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>
            Subject<span>*</span>
          </Form.Label>
          <Form.Control required type='text' placeholder='Query Subject' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>
            Please tell us more about your query:
            <span>*</span>
          </Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>

        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Attachments</Form.Label>
          <Form.Control type='file' />
        </Form.Group>

        <Button variant='success' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
