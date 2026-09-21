import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  fullWidth,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-brand-navy text-brand-purewhite hover:bg-brand-yellow hover:text-brand-navy focus:ring-brand-navy',
    secondary: 'bg-brand-yellow text-brand-navy hover:bg-brand-purewhite hover:text-brand-navy focus:ring-brand-yellow',
    outline: 'border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-purewhite focus:ring-brand-navy',
    'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-brand-navy focus:ring-white',
    ghost: 'text-brand-navy hover:bg-brand-navy/5 focus:ring-brand-navy',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm md:text-base',
    lg: 'px-8 py-4 text-base md:text-lg',
  };

  const width = fullWidth ? 'w-full' : '';
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
