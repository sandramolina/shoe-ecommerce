import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Delivery from './Delivery';

const FAQs = () => {
  return (
    <Tabs
      defaultActiveKey='profile'
      id='uncontrolled-tab-example'
      className='mb-3'
    >
      <Tab eventKey='home' title='Delivery'>
        <Delivery />
      </Tab>
      <Tab eventKey='returns' title='Returns'></Tab>
      <Tab eventKey='contact' title='Contact Us'></Tab>
      <Tab eventKey='orders' title='Orders' disabled></Tab>
    </Tabs>
  );
};

export default FAQs;
