import React from "react";
import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
interface HomeProps {
  content: any;
}
const Home = ({ content }: HomeProps) => {
  return (
    <Container id="home" fluid>
      <Header content={content.headerSections}></Header>
      <Image src={process.env.PUBLIC_URL + "/images/me.jpg"} className="mh-100 position-absolute fixed-top"/>
      <WelcomeMessage content={content}></WelcomeMessage>
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
