import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ gallery, showImage }) => {
  const items = gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        tags={tags}
        largeImageURL={largeImageURL}
        showImage={showImage}
      />
    );
  });

  return <ul className={css.gallery}>{items}</ul>;
};

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  showImage: PropTypes.func.isRequired,
};
