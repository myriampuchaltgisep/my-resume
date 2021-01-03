import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/esm/Container";

interface TechProps {
  content: any;
}
const Tech = ({ content }: TechProps) => {
  let skills = "";

  if (content.tech) {
    skills = content.tech.map(function (skill: any) {
      return (
        <>
          <p className="font-weight-bold text-sm-left ml-3 pl-3 skill">
            <FontAwesomeIcon icon={faCheck} className="icon mr-2" />
            {skill}
          </p>
        </>
      );
    });
  }

  return <Container id="tech">{skills}</Container>;
};

Tech.propTypes = {
  content: PropTypes.string,
};
Tech.defaultProps = {
  content: "",
};

export default Tech;
