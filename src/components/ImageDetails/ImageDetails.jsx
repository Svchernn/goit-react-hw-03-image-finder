import PropTypes from 'prop-types';

export const ImageDetails = ({ largeImageURL, tags }) => {
  return <img src={largeImageURL} width="1000" alt={tags} />;
};

ImageDetails.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
