import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

interface EducationProps {
  content: Array<any>;
}
const Education = ({ content }: EducationProps) => {
  let education;

  if (content) {
    education = content.map(function (line: any) {
      return (
        <>
          <h6 className="font-weight-bold">{line.duration}</h6>
          <p className="text-uppercase">{line.degree}</p>
          <p>
            <em>{line.school}</em>
          </p>
        </>
      );
    });
  }

  return (
    <Container fluid id="education" className="pt-4">
      {education}
    </Container>
  );
};

Education.propTypes = {
  content: PropTypes.array,
};
Education.defaultProps = {
  content: [],
};

export default Education;
