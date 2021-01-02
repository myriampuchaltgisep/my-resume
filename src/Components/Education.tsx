import React from "react";
import PropTypes from 'prop-types';

interface EducationProps {
  content: Array<any>;
}
const Education = ({ content }: EducationProps) => {

  let education;

  if (content) {
    education = content.map(function (line: any) {
      return (
        <>
          <h6 className="text-white font-weight-bold">{line.duration}</h6>
          <p className="text-uppercase">{line.degree}</p>
          <p><em>{line.school}</em></p>
        </>
      )
    });
  }

  return (
    <div id="education" className="text-sm-center pt-4">
      {education}
      <hr className="mt-4"></hr>
    </div>
  );
};

Education.propTypes = {
  content: PropTypes.array
}
Education.defaultProps = {
  content: []
}

export default Education;
