import PropTypes from 'prop-types';
interface HeaderProps {
  content: any;
}
const Header = ({ content }: HeaderProps) => {

  let headerSections;

  console.log(content);

  if (content) {
    headerSections = Object.entries(content).map(([key, value]) => {
      return (
        <li key={key}>
          <a href={`#${key}`}>
            {value}
            <i className="arrow down"></i>
          </a>
        </li>
      );
    })
  }

  return (
    <header>
      <nav id="nav-wrap">
        <ul id="nav" className="nav">
          {headerSections}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  content: PropTypes.object
}
Header.defaultProps = {
  content: {}
}

export default Header;
