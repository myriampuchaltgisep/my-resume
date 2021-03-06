import React from "react";
import PropTypes from "prop-types";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

interface DescriptionProps {
  content: Array<string>;
}
const Description = ({ content }: DescriptionProps) => {
  let description;

  if (content) {
    description = content.map(function (line: any) {
      return <p className="m-0">{line}</p>;
    });
  }

  return (
    <Container fluid id="description">
      <Image
        src={process.env.PUBLIC_URL + "/images/my-emoji.png"}
        className="my-2 ml-2"
      />
      <Container className="text py-4">{description}</Container>
    </Container>
  );
};

Description.propTypes = {
  content: PropTypes.array,
};
Description.defaultProps = {
  content: [],
};

export default Description;
