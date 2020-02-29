import React from 'react';
import loaderSvg from '../../../assets/img/loader.svg';
import s from './Preloader.module.css'

const Loader = (props) => {
  return (
    <div className={s.preloader}>
      <img src={loaderSvg} />
    </div>
  )
};

export default Loader;