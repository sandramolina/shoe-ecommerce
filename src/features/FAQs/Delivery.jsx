import React from 'react';

import { Accordion } from 'react-bootstrap';

const Delivery = () => {
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>
          How do I check the delivery status of my order?
        </Accordion.Header>
        <Accordion.Body>
          You can check the status of your order in two ways:
          <ul>
            <li>
              From the Shipping Confirmation email Click on the track and trace
              number that you find in the Shipping Confirmation email.
            </li>
            <li>
              Online via the courier’s website -{' '}
              <a href='https://www.ups.com/track?loc=en_GB&requester=ST/'>
                Click here
              </a>
              , and enter your track and trace number. You can find this in the
              Shipping Confirmation email.
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>
          What are the delivery costs & timeline?
        </Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Delivery time 4-6 business days.</li>
            <li>Cost £3.50 (FREE when you spend £50 or more)</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='3'>
        <Accordion.Header>
          How can I change my delivery address?
        </Accordion.Header>
        <Accordion.Body>
          We are unable to change the shipping address once an order has been
          placed because we cannot guarantee that the change in our system will
          be effective before the shipment takes place, and also to prevent
          possible fraud. You could try contacting the courier for advice. If
          your order is already in transit and the courier can’t deliver it due
          to the wrong address, it will be automatically returned to our
          warehouse and refunded. We advise you to check and update the shipping
          details in your Golden Shoe account to avoid any future issues.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='4'>
        <Accordion.Header>Can I order & collect from a store?</Accordion.Header>
        <Accordion.Body>
          Store collection is available. You can select a delivery option and
          collect an order from any of our stores nationwide.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='5'>
        <Accordion.Header>
          How do I know if my items have been despatched?
        </Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='6'>
        <Accordion.Header>Where is my tracking number?</Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='7'>
        <Accordion.Header>
          What happens if I'm out when you deliver?
        </Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='8'>
        <Accordion.Header>
          Can I have my order delivered to another address?
        </Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='9'>
        <Accordion.Header>What are your delivery charges?</Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='10'>
        <Accordion.Header>Where do you deliver to?</Accordion.Header>
        <Accordion.Body>TBD</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Delivery;
