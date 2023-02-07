import { ColorRing } from 'react-loader-spinner';

import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
