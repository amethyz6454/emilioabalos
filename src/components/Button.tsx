import classNames from "classnames";
import { forwardRef, ReactNode } from "react";

export type ButtonVariant = "contained" | "outlined" | "ghost" | "text";
export type ButtonColor = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonComposition = "default" | "square" | "circle";

interface BaseProps {
    children: ReactNode;
    className?: string;
    color?: ButtonColor;
    composition?: ButtonComposition;
    disabled?: boolean;
    isFullWidth?: boolean;
    isSharp?: boolean;
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
        isFullWidth = false,
        isSharp = false,
        size = "medium",
        variant = "contained",
        ...rest
    } = props;

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
