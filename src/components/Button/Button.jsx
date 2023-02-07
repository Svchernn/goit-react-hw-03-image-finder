import PropTypes from 'prop-types';
import css from './Button.module.css';

export const Button = ({ text, clickHandler }) => {
  return (
    <button className={css.btn} type="button" onClick={clickHandler}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
