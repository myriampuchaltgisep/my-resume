import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

interface FooterProps {
  content: any;
}
const Footer = ({ content }: FooterProps) => {
  let socialNetworks = "";

  if (content) {
    socialNetworks = content.map(function (network: any) {
      return (
        <ListGroup.Item className="d-block border-0">
          <Button href={network.url} variant="link">
            <FontAwesomeIcon icon={["fab", network.name]} className="icon" />
          </Button>
        </ListGroup.Item>
      );
    });
  }

  return (
    <footer>
      <ul>
        <ListGroup>
          <ListGroup.Item className="border-0">
            <FontAwesomeIcon icon={faBars} className="icon float-right" />
          </ListGroup.Item>
          <ListGroup.Item
            className="rotate border-0 font-weight-bold"
            href="#home"
          >
            HOME
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className="social">{socialNetworks}</ListGroup>
      </ul>
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
