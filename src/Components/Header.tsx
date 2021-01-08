import React from "react";
import PropTypes from "prop-types";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
interface HeaderProps {
  content: any;
}
const Header = ({ content }: HeaderProps) => {
  let headerSections;

  if (content) {
    headerSections = Object.entries(content).map(([key, value]) => {
      return (
        <Nav.Link href={`#${key}`} className="text-white">
          {value}
          <i className="arrow down p-1 mb-1 ml-2 d-inline-block border border-white border-left-0 border-top-0"></i>
        </Nav.Link>
      );
    });
  }

  return (
    <header>
      <Navbar id="nav-wrap" expand="lg" className="pt-5 px-0">
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav id="nav" className="mr-auto">
            {headerSections}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  content: PropTypes.object,
};
Header.defaultProps = {
  content: {},
};

export default Header;
