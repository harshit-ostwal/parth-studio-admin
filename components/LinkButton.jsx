import React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import Link from 'next/link';

const linkVariants = cva(
    "transition-colors duration-200 ease-in flex gap-3 items-center font-semibold font-Gilroy",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-text hover:bg-secondary text-sm focus:bg-secondary-text focus:text-secondary hover:text-secondary-text",
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

const LinkButton = ({ href, size, onClick, disabled, variant, className, children, ...props }) => {
    return (
        <Link href={href} onClick={onClick} disabled={disabled} className={cn(linkVariants({ variant, size, className }))} {...props}>
            {children}
        </Link>
    );
}

export default LinkButton;