import classNames from "classnames";
import React, { forwardRef, ReactNode, MouseEvent, ComponentPropsWithoutRef } from "react";

export type ButtonVariant = "contained" | "outlined" | "ghost" | "text";
export type ButtonColor = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonComposition = "default" | "square" | "circle";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
    className?: string;
    color?: ButtonColor;
    composition?: ButtonComposition;
    disabled?: boolean;
    href?: string;
    isFullWidth?: boolean;
    isSharp?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
    size?: ButtonSize;
    target?: string;
    variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
    {
        children,
        className = "",
        color = "primary",
        composition = "default",
        disabled,
        href,
        isFullWidth = false,
        isSharp = false,
        onClick,
        size = "medium",
        variant = "contained",
        target,
        ...rest
    },
    ref
) {
    const buttonVariant = {
        contained: {
            primary:
                "border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300 focus:bg-primary-300 focus:ring-primary active:bg-primary",
            secondary:
                "border-secondary bg-secondary text-white hover:border-secondary-800 hover:bg-secondary-800 hover:text-white focus:bg-secondary-300 focus:ring-secondary active:bg-secondary",
            tertiary:
                "border-tertiary bg-tertiary text-secondary hover:border-tertiary-300 hover:bg-tertiary-300 hover:text-secondary focus:bg-tertiary-300 focus:ring-tertiary active:bg-tertiary",
        },
        outlined: {
            primary:
                "border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus:bg-primary focus:ring-primary active:bg-primary",
            secondary:
                "border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:ring-secondary active:bg-secondary",
            tertiary:
                "border-tertiary bg-transparent text-tertiary hover:bg-tertiary hover:text-white focus:bg-tertiary focus:ring-tertiary active:bg-tertiary",
        },
        ghost: {
            primary:
                "border-transparent bg-primary/35 text-secondary hover:text-white hover:border-primary hover:bg-primary focus:bg-primary-600 focus:ring-primary active:bg-primary",
            secondary:
                "border-transparent bg-secondary/35 text-secondary hover:text-white hover:border-secondary hover:bg-secondary focus:bg-secondary focus:ring-secondary active:bg-secondary",
            tertiary:
                "border-transparent bg-tertiary/35 text-secondary hover:text-secondary hover:border-tertiary hover:bg-tertiary focus:bg-tertiary focus:ring-tertiary active:bg-tertiary",
        },
        text: {
            primary:
                "border-transparent bg-transparent text-primary hover:text-primary-400 focus:text-primary-400 focus:ring-primary active:text-primary",
            secondary:
                "border-transparent bg-transparent text-secondary hover:text-secondary-800 focus:text-secondary-800 focus:ring-secondary active:text-secondary",
            tertiary:
                "border-transparent bg-transparent text-tertiary hover:text-tertiary-400 focus:text-tertiary-400 focus:ring-tertiary active:text-tertiary",
        },
    };

    const buttonComposition = {
        default: {
            small: classNames("px-3 h-6", { "rounded-md": !isSharp }),
            medium: classNames("px-5 h-9", { "rounded-md": !isSharp }),
            large: classNames("px-6 h-12", { "rounded-md": !isSharp }),
        },
        square: {
            small: classNames("h-6 w-6", { "rounded-md": !isSharp }),
            medium: classNames("h-10 w-10", { "rounded-md": !isSharp }),
            large: classNames("h-12 w-12", { "rounded-md": !isSharp }),
        },
        circle: {
            small: "h-6 w-6 rounded-full",
            medium: "h-10 w-10 rounded-full",
            large: "h-12 w-12 rounded-full",
        },
    };

    const commonClasses = classNames(
        "inline-flex items-center justify-center border-2 border-solid text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-offset-1 cursor-pointer",
        buttonVariant[variant][color],
        buttonComposition[composition][size],
        { "w-full": isFullWidth },
        { "pointer-events-none opacity-25": disabled },
        className
    );

    const isLink = typeof href !== "undefined";

    const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (disabled) {
            e.preventDefault();
            return;
        }
        onClick?.(e);
    };

    if (isLink) {
        const { ...linkRest } = rest as ComponentPropsWithoutRef<"a">;
        return (
            <a
                {...linkRest}
                ref={ref as React.ForwardedRef<HTMLAnchorElement>}
                href={href}
                className={commonClasses}
                onClick={handleClick}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...rest}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
            className={commonClasses}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
});

export default Button;
