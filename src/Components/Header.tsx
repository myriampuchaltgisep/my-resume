const Header = () => {
  const headerSections = {
    aboutme: "About Me",
    education: "Education",
    skills: "Skills",
    experience: "Experience",
    // languages: "Languages",
    contact: "Contact",
  };
  return (
    <header>
      <nav id="nav-wrap">
        {/* <ul id="name" className="name">
        Myriam Puchalt
      </ul> */}
        <ul id="nav" className="nav">
          {Object.entries(headerSections).map(([key, value]) => {
            return (
              <li>
                <a href={`#${key}`}>
                  {value}
                  <i className="arrow down"></i>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
