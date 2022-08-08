import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Contact from './Contact';
import Delivery from './Delivery';
import Returns from './Returns';

const FAQs = () => {
  return (
    <Tabs defaultActiveKey='delivery' id='uncontrolled-tab' className='mb-3'>
      <Tab eventKey='delivery' title='Delivery'>
        <Delivery />
      </Tab>
      <Tab eventKey='returns' title='Returns'>
        <Returns />
      </Tab>
      <Tab eventKey='contact' title='Contact Us'>
        <Contact />
      </Tab>
      <Tab eventKey='orders' title='Orders' disabled></Tab>
    </Tabs>
  );
};

export default FAQs;
