import { Component } from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { searchImage } from './services/imageApi';
import { Modal } from './Modal/Modal';
import { ImageDetails } from './ImageDetails/ImageDetails';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    gallery: [],
    loading: false,
    eroor: null,
    page: 1,
    showModal: false,
    imageDetails: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImage();
    }
  }

  async fetchImage() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const { data } = await searchImage(search, page);
      this.setState(({ gallery }) => ({ gallery: [...gallery, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSearch = ({ search }) => {
    this.setState({ search, gallery: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImage = ({ largeImageURL, tags }) => {
    this.setState({
      imageDetails: {
        largeImageURL,
        tags,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      imageDetails: null,
    });
  };

  render() {
    const { gallery, loading, error, search, showModal, imageDetails } =
      this.state;
    const { onSearch, loadMore, showImage, closeModal } = this;

    return (
      <div>
        <Searchbar onSubmit={onSearch} />
        <ImageGallery gallery={gallery} showImage={showImage} />
        {!gallery.length && search && <p>...Image not found</p>}
        {loading && <Loader />}
        {error && <p>Something goes wrong...</p>}
        {Boolean(gallery.length) && (
          <Button text="Load more" clickHandler={loadMore} />
        )}
        {showModal && (
          <Modal close={closeModal}>
            <ImageDetails {...imageDetails} />
          </Modal>
        )}
      </div>
    );
  }
}
