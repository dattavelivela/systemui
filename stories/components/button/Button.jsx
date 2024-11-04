import React from 'react';
import './button.css';
const Button = ({
  label = 'Button',
  toggleLabel = true,
  size = 'default',
  type = 'solid',
  color = 'primary',
  iconLeft,
  iconRight,
  toggleLeftIcon = false,
  toggleRightIcon = false,
  disabled = false,
  onClick
}) => {
  const buttonClasses = `button ${size} ${type} ${color} ${disabled ? 'disabled' : ''}`;
  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {toggleLeftIcon && iconLeft && (
        <span className="icon-left">
          {iconLeft}
        </span>
      )}
      {toggleLabel && <span className="label">{label}</span>}
      {toggleRightIcon && iconRight && (
        <span className="icon-right">
          {iconRight}
        </span>
      )}
    </button>
  );
};
export default Button;