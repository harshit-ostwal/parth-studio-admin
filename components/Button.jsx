import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
    "transition-colors duration-300 flex gap-2 items-center justify-center font-VisbyRoundMedium",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-text hover:bg-secondary focus:bg-secondary focus:text-secondary-text hover:text-secondary-text",
                destructive: "bg-destructive text-destructive-text focus:bg-[#fca5a5] hover:bg-[#fca5a5]",
                outline: "border bg-transparent hover:bg-accent focus:bg-accent focus:text-accent-text hover:text-accent-text",
                secondary: "bg-secondary-text text-secondary focus:bg-secondary focus:text-secondary-text hover:bg-secondary hover:text-secondary-text",
            },
            size: {
                default: "rounded px-6 py-3",
                sm: "rounded-md px-4 py-3",
                lg: "rounded-lg px-10 py-4",
                xl: "rounded-xl px-14 py-5",
                icon: "h-12 w-12 rounded-md",
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