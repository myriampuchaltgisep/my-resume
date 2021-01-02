import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

interface ExperienceProps {
  content: Array<any>;
}
const Experience = ({ content }: ExperienceProps) => {
  const getListedDescription = (description: Array<string>) => {
    if (!description) {
      return;
    }
    return description.map(function (item: any) {
      return (
        <ListGroup>
          <ListGroup.Item className="p-1 border-0 text-justify">{item}</ListGroup.Item>
        </ListGroup>
      );
    });
  };

  const getJobExperience = (job: any) => {
    if (!job) {
      return;
    }

    return (
      <div className="job h-100 p-4 mb-4" key={job.title}>
        <h5 className="text-white text-sm-left" font-weight-bold>{job.title}</h5>
        <h6 className="text-white">{job.company}</h6>
        <ul className="p-0">{getListedDescription(job.description)}</ul>
        <p className="duration font-weight-bold position-absolute">{job.duration}</p>
      </div>
    );
  };

  return (
    <>
      <Row className="mb-3">
        <Col>{getJobExperience(content[0])}</Col>
        <Col>{getJobExperience(content[1])}</Col>
      </Row>
      <Row className="mb-3">
        <Col>{getJobExperience(content[2])}</Col>
        <Col>{getJobExperience(content[3])}</Col>
      </Row>
    </>
  );
};

Experience.propTypes = {
  content: PropTypes.array,
};
Experience.defaultProps = {
  content: [],
};

export default Experience;
