import React from 'react';
import './Button.styles.scss';
import classNames from 'classnames';
import Loader from '../Loader/Loader';

type OwnProps = {
  children: any;
  disabled: boolean;
  isFetching?: boolean;
  reversed?: boolean;
  small?: boolean;
  onClick?: () => void;
};

const Button: React.FC<OwnProps> = ({
  children,
  disabled,
  reversed,
  small,
  onClick,
  isFetching,
}) => {
  const buttonClasses = classNames({
    btn: true,
    disabled: disabled,
    reversed: reversed,
    small: small,
  });
  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      type={'submit'}
    >
      {isFetching ? <Loader fill={'black'} height={'40px'} /> : children}
    </button>
  );
};

export default Button;
