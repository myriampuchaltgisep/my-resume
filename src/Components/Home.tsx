import Header from "./Header";
import WelcomeMessage from "./WelcomeMessage";
import PropTypes from "prop-types";

interface HomeProps {
  content: any;
}
const Home = ({ content }: HomeProps) => {
  return (
    <section id="aboutme">
      <Header content={content.headerSections} ></Header>
      <div id="profile-picture">
        <img src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="profile" />
      </div>
      <WelcomeMessage content={content}></WelcomeMessage>
    </section>
  );
};

Home.propTypes = {
  content: PropTypes.object,
};
Home.defaultProps = {
  content: {},
};

export default Home;
