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
          <h3 key={line}>
            {line}
            <span> {content.name}</span>
          </h3>
        );
      }
      return <h3 key={line}>{line}</h3>;
    });
  }

  return (
    <div className="welcome-message">
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
