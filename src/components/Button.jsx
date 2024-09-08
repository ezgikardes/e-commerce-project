import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ size, variant, children, onClick }) => {
  const baseStyle = 'focus:outline-none focus:ring-2 focus:ring-opacity-75 px-4 py-2 rounded';
  const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  const variantStyles = {
    primary: 'bg-[#2DC071] text-white',
    outline: 'bg-transparent text-[#2DC071] border-2 border-[#2DC071] hover:bg-[#2DC071] hover:text-white rounded',
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
