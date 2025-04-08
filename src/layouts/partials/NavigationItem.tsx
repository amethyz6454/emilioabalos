import classNames from "classnames";
import { forwardRef, ReactNode } from "react";
import NavigationStyles from "@/styles/layouts/partials/navigation.module.scss";

interface BaseProps {
    children: ReactNode;
    className?: string;
    disabled?: boolean;
    isActive?: boolean;
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

const NavigationItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
    function NavigationItem(props, ref) {
        const { children, className = "", disabled, isActive, href, ...rest } = props;

        if (href) {
            const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
            return (
                <a
                    href={href}
                    ref={ref as React.Ref<HTMLAnchorElement>}
                    className={classNames(
                        NavigationStyles.nav,
                        { [NavigationStyles.active]: isActive },
                        { [NavigationStyles.inactive]: !isActive },
                        { "pointer-events-none opacity-25": disabled },
                        className
                    )}
                    {...anchorProps}
                >
                    {children}
                </a>
            );
        }

        const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
        return (
            <button
                type="button"
                disabled={disabled}
                ref={ref as React.Ref<HTMLButtonElement>}
                className={classNames(
                    NavigationStyles.nav,
                    { [NavigationStyles.active]: isActive },
                    { [NavigationStyles.inactive]: !isActive },
                    { "pointer-events-none opacity-25": disabled },
                    className
                )}
                {...buttonProps}
            >
                {children}
            </button>
        );
    }
);

export default NavigationItem;
