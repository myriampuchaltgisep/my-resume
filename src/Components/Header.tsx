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
        <Nav.Link href={`#${key}`}>
          {value}
          <i className="arrow down"></i>
        </Nav.Link>
      );
    });
  }

  return (
    <header>
      <Navbar id="nav-wrap" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
