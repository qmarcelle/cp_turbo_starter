import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const tooltipVariants: (props?: ({
    variant?: "default" | "dark" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    content: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'start' | 'center' | 'end';
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;

export { Button, type ButtonProps, Tooltip, type TooltipProps };
