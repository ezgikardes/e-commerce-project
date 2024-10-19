import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ size, variant, isSelected, children, onClick }) => {
  const baseStyle = 'py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75';
  const sizeStyles = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
  };

  // Seçili olduğunda gri arka plan, yazı siyah olacak
  const variantStyles = {
    primary: isSelected ? 'bg-gray-100 text-black' : 'bg-blue-500 text-white hover:bg-blue-700',
    outline: isSelected ? 'bg-gray-100 text-black border border-gray-500' : 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white',
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
  isSelected: PropTypes.bool, // Seçili durum için yeni prop eklendi
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'md',
  variant: 'primary',
  isSelected: false, // Varsayılan olarak seçili değil
  onClick: () => {},
};

export default Button;
