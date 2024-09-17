// src/component/button/Button.ts
import React from 'react';
import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return React.createElement(
    'button',
    { className, onClick },
    children
  );
};

export default Button;
