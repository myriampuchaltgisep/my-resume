import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/esm/Container';

interface TechProps {
  content: any;
}
const Tech = ({ content }: TechProps) => {
  let techStack = '';
  let skills = '';

  const getSkills = (skills: any) => {
    return skills.map(function (skill: any) {
      return (
        <>
          <p className="font-weight-bold text-lg-left skill mb-0">
            <FontAwesomeIcon icon={faCheck} className="icon mr-2" />
            {skill}
          </p>
        </>
      );
    });
  };

  if (content.tech) {
    techStack = getSkills(content.tech);
  }

  if (content.soft) {
    skills = getSkills(content.soft);
  }

  return (
    <Container id="tech">
      <p>{skills}</p>
      <p>{techStack}</p>
    </Container>
  );
};

Tech.propTypes = {
  content: PropTypes.string,
};
Tech.defaultProps = {
  content: '',
};

export default Tech;
