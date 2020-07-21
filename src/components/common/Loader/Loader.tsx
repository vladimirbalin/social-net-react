import React from 'react';
import './Loader.styles.scss';
import { ReactComponent as LoaderSvg } from '../../../assets/img/loader.svg';

type OwnProps = {
  fill?: string;
  width?: string;
  height?: string;
};
const Loader: React.FC<OwnProps> = ({
  fill = '#c68f7d',
  width = '64px',
  height = '64px',
}) => {
  return (
    <div className="preloader">
      <LoaderSvg fill={fill} width={width} height={height} />
    </div>
  );
};

export default Loader;
