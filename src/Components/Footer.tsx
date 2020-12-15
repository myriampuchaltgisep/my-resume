import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {
  content: any;
}
const Footer = ({ content }: FooterProps) => {
  let networks = "";

  if (content.social) {
    networks = content.social.map(function (network: any) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <FontAwesomeIcon icon={["fab", network.name]} className="icon"/>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="contactDetails">
      </div>
      <ul className="social-links">{networks}</ul>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.string,
};
Footer.defaultProps = {
  content: "",
};

export default Footer;
