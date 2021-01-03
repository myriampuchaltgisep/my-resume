import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";

interface LanguagesProps {
  content: any;
}
const Languages = ({ content }: LanguagesProps) => {
  let languageCirles;

  if (content.languages) {
    languageCirles = Object.entries(content.languages).map(([key, value]) => {
      const colouredCircle = `${value}, 100`;
      return (
        <Container className="outer m-2 p-0">
          <svg
            viewBox="0 0 36 36"
            className="circular-chart text-white font-weight-bold d-block m-0"
          >
            <path
              className="base-circle"
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="coloured-circle"
              stroke-dasharray={colouredCircle}
              d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">
              {value}%
            </text>
          </svg>
          <p className="text-white text-sm-center m-0">{key}</p>
        </Container>
      );
    });
  }

  return (
    <Container
      id="languages"
      className="d-flex flex-row justify-content-center"
    >
      {languageCirles}
    </Container>
  );
};

Languages.propTypes = {
  content: PropTypes.string,
};
Languages.defaultProps = {
  content: "",
};

export default Languages;
