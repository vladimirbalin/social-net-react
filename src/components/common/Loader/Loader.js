import React from 'react';
import loaderSvg from '../../../assets/img/loader.svg';
import './Loader.styles.scss';

const Loader = (props) => {
  return (
    <div className='preloader'>
      <img src={loaderSvg} alt='loader' />
    </div>
  )
};

export default Loader;