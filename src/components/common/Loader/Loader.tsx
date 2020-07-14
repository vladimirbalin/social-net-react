import React from 'react';
import './Loader.styles.scss';
import loaderSvg from '../../../assets/img/loader.svg';

const Loader: React.FC = () => {
  return (
    <div className='preloader'>
      <img src={loaderSvg} alt='loader' />
    </div>
  )
};

export default Loader;