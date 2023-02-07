import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { children, close } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal} onclick={close}>
          {children}
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
