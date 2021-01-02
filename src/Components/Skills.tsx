import React from "react";
import Languages from "./Languages";
import Tech from "./Tech";
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";


interface SkillsProps {
  content: any;
}
const Skills = ({ content }: SkillsProps) => {
  
  return (
    <Container id="skills">
      <Languages content={content}></Languages>
      <hr className=""></hr>
      <Tech content={content}></Tech>
      <hr className=""></hr>
    </Container>
  );
};

Skills.propTypes = {
  content: PropTypes.string
}
Skills.defaultProps = {
  content: ''
}

export default Skills;
