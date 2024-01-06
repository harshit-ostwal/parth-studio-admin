import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const buttonVariants = cva(
    "transition-colors duration-300 flex gap-2 items-center justify-center font-VisbyRoundMedium",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-text hover:bg-secondary hover:text-secondary-text",
                destructive: "bg-destructive text-destructive-text hover:bg-[#fca5a5]",
                outline: "border bg-transparent hover:bg-accent hover:text-accent-text",
                secondary: "bg-secondary-text text-secondary hover:bg-secondary hover:text-secondary-text",
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

const Button = ({ size, variant, className, children, ...props }) => {
    return (
        <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
            {children}
        </button>
    );
}

export default Button;