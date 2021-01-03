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
        <ListGroup.Item className="d-block border-0 p-0">
          <Button href={network.url} variant="link">
            <FontAwesomeIcon icon={["fab", network.name]} className="icon" />
          </Button>
        </ListGroup.Item>
      );
    });
  }

  return (
    <footer className="h-100">
      <ul className="d-flex flex-column justify-content-between pl-0 mb-0 h-100">
        <ListGroup>
          <ListGroup.Item action href="#home" className="border-0 d-flex">
            <FontAwesomeIcon
              icon={faBars}
              className="icon float-right m-auto"
            />
          </ListGroup.Item>
          <ListGroup.Item
            action
            href="#home"
            className="rotate border-0 mt-4 font-weight-bold text-reset"
          >
            HOME
          </ListGroup.Item>
        </ListGroup>
        <ListGroup className="social d-flex flex-column">
          {socialNetworks}
        </ListGroup>
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
