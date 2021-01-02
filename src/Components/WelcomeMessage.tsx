import React from "react";
import PropTypes from "prop-types";

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
    <div className="welcome-message text-sm-center">
      {welcomeMessage}
    </div>
  );
};

WelcomeMessage.propTypes = {
  content: PropTypes.object,
};
WelcomeMessage.defaultProps = {
  content: {},
};

export default WelcomeMessage;
