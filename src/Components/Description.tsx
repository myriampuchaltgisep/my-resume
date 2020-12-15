import PropTypes from 'prop-types';

interface DescriptionProps {
  content: any;
}
const Description = ({ content }: DescriptionProps) => {
  return (
    <div className="description">
      <div className="description-text">
        <h3>{content.description} <span>{content.name}</span></h3>
        <h3>{content.description0}</h3>
      </div>
    </div>
  );
};

Description.propTypes = {
  content: PropTypes.string
}
Description.defaultProps = {
  content: ''
}

export default Description;
