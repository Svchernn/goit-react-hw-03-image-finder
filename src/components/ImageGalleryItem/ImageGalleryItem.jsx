import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  src,
  largeImageURL,
  tags,
  showImage,
}) => {
  return (
    <li
      onClick={() => showImage({ largeImageURL,tags })}
      className={css.galleryItem}
    >
      <img className={css.galleryItemImg} src={src} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showImage: PropTypes.func.isRequired,
};
