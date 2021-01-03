import React from "react";
import Languages from "./Languages";
import Tech from "./Tech";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

interface SkillsProps {
  content: any;
}
const Skills = ({ content }: SkillsProps) => {
  return (
    <Container id="skills">
      <hr></hr>
      <Languages content={content}></Languages>
      <hr></hr>
      <Tech content={content}></Tech>
      <hr></hr>
    </Container>
  );
};

Skills.propTypes = {
  content: PropTypes.string,
};
Skills.defaultProps = {
  content: "",
};

export default Skills;
