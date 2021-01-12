import React from 'react';
import Header from './Header';
import WelcomeMessage from './WelcomeMessage';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
interface HomeProps {
  content: any;
}
const Home = ({ content }: HomeProps) => {
  return (
    <Container fluid id="home">
      <Row className="h-100">
        <Col md={7} lg={5} className="px-0 profilePicture"></Col>
        <Col lg={6} className="welcome-message">
          <WelcomeMessage content={content}></WelcomeMessage>
        </Col>
        <Col>
          <Header content={content.headerSections}></Header>
        </Col>
      </Row>
    </Container>
  );
};

Home.propTypes = {
  content: PropTypes.object,
};
Home.defaultProps = {
  content: {},
};

export default Home;
