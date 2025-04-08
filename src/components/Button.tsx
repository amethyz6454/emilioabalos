import classNames from "classnames";
import { forwardRef, ReactNode } from "react";

type ButtonVariant = "contained" | "outlined" | "ghost" | "text";
type ButtonColor = "primary" | "secondary" | "tertiary";
type ButtonSize = "small" | "medium" | "large";
type ButtonComposition = "default" | "square" | "circle";

interface BaseProps {
    children: ReactNode;
    className?: string;
    color?: ButtonColor;
    composition?: ButtonComposition;
    disabled?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
}

type ButtonAsButton = BaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "color"> & {
        href?: undefined;
    };

type ButtonAsLink = BaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type" | "color"> & {
        href: string;
    };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(props, ref) {
    const {
        children,
        className = "",
        color = "primary",
        composition = "default",
        disabled,
        href,
        size = "medium",
        variant = "contained",
        ...rest
    } = props;

    const buttonVariant = {
        contained: {
            primary:
                "border-primary bg-primary text-white hover:border-primary-300 hover:bg-primary-300 focus:bg-primary-300 focus:ring-primary-500 active:bg-primary-500",
            secondary:
                "border-secondary bg-secondary text-white hover:border-secondary-300 hover:bg-secondary-300 hover:text-black focus:bg-secondary-300 focus:ring-secondary-500 active:bg-secondary-500",
            tertiary:
                "border-tertiary bg-tertiary text-white hover:border-tertiary-300 hover:bg-tertiary-300 hover:text-black focus:bg-tertiary-300 focus:ring-tertiary-500 active:bg-tertiary-500",
        },
        outlined: {
            primary:
                "border-primary bg-transparent text-primary hover:bg-primary hover:text-white focus:bg-primary focus:ring-primary active:bg-primary-500",
            secondary:
                "border-secondary bg-transparent text-secondary hover:bg-secondary hover:text-white focus:bg-secondary focus:ring-secondary active:bg-secondary-500",
            tertiary:
                "border-tertiary bg-transparent text-tertiary hover:bg-tertiary hover:text-white focus:bg-tertiary focus:ring-tertiary active:bg-tertiary-500",
        },
        ghost: {
            primary:
                "border-primary border-opacity-35 bg-primary bg-opacity-35 text-white hover:border-primary-300 hover:bg-primary-300 focus:bg-primary-300 focus:ring-primary-500 active:bg-primary-500",
            secondary:
                "border-secondary border-opacity-35 bg-secondary bg-opacity-35 text-white hover:border-secondary-300 hover:bg-secondary-300 hover:text-black focus:bg-secondary-300 focus:ring-secondary-500 active:bg-secondary-500",
            tertiary:
                "border-tertiary border-opacity-35 bg-tertiary bg-opacity-35 text-white hover:border-tertiary-300 hover:bg-tertiary-300 hover:text-black focus:bg-tertiary-300 focus:ring-tertiary-500 active:bg-tertiary-500",
        },
        text: {
            primary:
                "border-transparent bg-transparent text-primary-300 hover:text-primary-200 focus:text-primary-200 focus:ring-primary active:text-primary",
            secondary:
                "border-transparent bg-transparent text-secondary-300 hover:text-secondary-200 focus:text-secondary-200 focus:ring-secondary-500 active:text-secondary",
            tertiary:
                "border-transparent bg-transparent text-tertiary-300 hover:text-tertiary-200 focus:text-tertiary-200 focus:ring-tertiary active:text-tertiary",
        },
    };

    const buttonComposition = {
        default: {
            small: "px-3 h-6 rounded",
            medium: "px-5 h-9 rounded",
            large: "px-6 h-12 rounded",
        },
        square: {
            small: "h-6 w-6 rounded",
            medium: "h-10 w-10 rounded",
            large: "h-14 w-14 rounded",
        },
        circle: {
            small: "h-6 w-6 rounded-full",
            medium: "h-9 w-9 rounded-full",
            large: "h-12 w-12 rounded-full",
        },
    };

    const commonClasses = classNames(
        "inline-flex items-center justify-center border border-solid text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-offset-1",
        buttonVariant[variant][color],
        buttonComposition[composition][size],
        { "pointer-events-none opacity-25": disabled },
        className
    );

    if (href) {
        const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <a href={href} ref={ref as React.Ref<HTMLAnchorElement>} className={commonClasses} {...anchorProps}>
                {children}
            </a>
        );
    }

    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
        <button
            disabled={disabled}
            ref={ref as React.Ref<HTMLButtonElement>}
            className={commonClasses}
            {...buttonProps}
        >
            {children}
        </button>
    );
});

export default Button;
