import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export default function Button({ 
  variant = 'primary', 
  className = '', 
  children, 
  href,
  fullWidth = false,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-4 py-3 sm:px-6 sm:py-3 rounded-lg font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 hover:transform hover:-translate-y-0.5 active:transform active:translate-y-0 text-center inline-block';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-indigo-600 focus:ring-primary shadow-md hover:shadow-lg',
    secondary: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary'
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const buttonStyles = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
} 