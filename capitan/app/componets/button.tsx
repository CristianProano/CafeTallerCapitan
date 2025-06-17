import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-[#a97455] hover:bg-[#8a5c3c] text-white font-bold py-2 px-4 rounded shadow-md transition-all"
    >
      {children}
    </button>
  );
};

export default Button;
