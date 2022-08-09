import React from 'react';

import { Accordion } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const Returns = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <p>
        We always advise the best place to return your order to is from where it
        was purchased.
      </p>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Timescales</Accordion.Header>
        <Accordion.Body>
          <h5>How much time do I have to return a product?</h5>
          <p>You have 28 days from the day of purchase/date of delivery.</p>

          <h5>What is the status of my return?</h5>
          <p>
            We process all returns as fast as possible but be advised that it
            could take up to 14 calendar days to process your refund.
          </p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Do I have to pay for a return?</Accordion.Header>
        <Accordion.Body>
          No! Your complete satisfaction is important to Golden Shoe! If you are
          not satisfied with the products you ordered online, you may return
          them completely free of charge, within 28 calendar days of delivery.
          <Alert variant='danger'>
            Please note: returns are only free when sent back using the Golden
            Shoe UPS label.
          </Alert>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>How can I return a gift?</Accordion.Header>
        <Accordion.Body>
          If you have the receipt, and it's within the 28 days of the date of
          purchase, then Yes, you can simply return using our standard return
          procedures. If you don't have the receipt, you may be able to exchange
          the item in-store (once stores are open again), provided the item is
          in an unworn condition, with all original packaging and labels
          attached. The return/exchange is at each store manager's discretion..
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>
          Can I return items from different orders in one box?
        </Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>How can I return a gift?</Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>
          Can I return items from different orders in one box?
        </Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='7'>
        <Accordion.Header>Can I amend my order?</Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='8'>
        <Accordion.Header>When do I get my refund?</Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='9'>
        <Accordion.Header>Where is my refund credited?</Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='10'>
        <Accordion.Header>Will you refund the postage cost?</Accordion.Header>
        <Accordion.Body>
          No, this is not possible. Each item you are returning will need to be
          in its original box/packaging, with all original labels attached.{' '}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Returns;
