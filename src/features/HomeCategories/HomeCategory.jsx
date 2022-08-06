import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './HomeCategory.css';

function HomeCategory() {
  return (
    <Container>
      <Row>
        <Col className='image-container'>
          <img
            className='d-block w-100'
            src='https://betelli.uk/data/include/img/links/1593074366_rwd_desktop.jpg'
            alt='banner men shoes'
          />
        </Col>
        <Col className='image-container'>
          <img
            className='d-block w-100'
            src='https://betelli.uk/data/include/img/links/1593074434_rwd_desktop.jpg'
            alt='banner women shoes'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCategory;
