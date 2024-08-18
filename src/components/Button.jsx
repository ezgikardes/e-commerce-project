import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ size, variant, children, onClick }) => {
  const baseStyle = 'py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  const variantStyles = {
    primary: 'bg-[#2DC071] text-white hover:bg-blue-700',
    outline: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white',
  };

  const classes = classNames(baseStyle, sizeStyles[size], variantStyles[variant]);

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['primary', 'outline']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  onClick: () => {},
};

export default Button;
