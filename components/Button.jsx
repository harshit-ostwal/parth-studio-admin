import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
    "transition-colors duration-200 ease-in flex gap-3 items-center font-semibold font-Gilroy",
    {
        variants: {
            variant: {
                default: "bg-background text-background-text hover:bg-secondary-text hover:text-background text-sm focus:bg-background focus:text-background-text",
                secondary: "bg-background-text text-background border focus:border-background-text focus:bg-background focus:text-background-text text-sm hover:bg-secondary hover:text-secondary-text"
            },
            size: {
                default: "rounded-md px-4 py-3",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Button = ({ size, onClick, disabled, variant, className, children, ...props }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
        </button>
    );
}

export default Button;