import React from 'react';
type ButtonProps = {
  className: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  text: string;
};

const Button = ({ className, type = 'button', onClick, text }: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="">
      <button className={className} type={type} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
