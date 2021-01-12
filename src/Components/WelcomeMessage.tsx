import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
interface WelcomeMessageProps {
  content: any;
}
const WelcomeMessage = ({ content }: WelcomeMessageProps) => {
  var welcomeMessage;

  if (content.welcome) {
    welcomeMessage = content.welcome.map(function (line: any, index: any) {
      if (index === 0) {
        return (
          <h2 key={line}>
            {line}
            <span className="display-4"> {content.name}</span>
          </h2>
        );
      }
      return <h2 key={line}>{line}</h2>;
    });
  }

  return (
    <Container className="text-sm-center mx-0 px-0">
      {welcomeMessage}
    </Container>
  );
};

WelcomeMessage.propTypes = {
  content: PropTypes.object,
};
WelcomeMessage.defaultProps = {
  content: {},
};

export default WelcomeMessage;
