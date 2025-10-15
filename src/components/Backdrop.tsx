import classNames from "classnames";
import React, { JSX, KeyboardEvent, MouseEvent } from "react";

interface BackdropProps {
    /**
     * If `true`, the backdrop is visible.
     */
    isOpen: boolean;
    /**
     * The accessible label for the backdrop, describing its function.
     * @default "Close"
     */
    ariaLabel?: string;
    /**
     * Callback fired when the backdrop is clicked.
     */
    onClick?: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) => void;
}

const Backdrop: React.FC<BackdropProps> = (props): JSX.Element => {
    const { isOpen = false, onClick, ariaLabel = "Close" } = props;

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onClick(event);
        }
    };

    return (
        <div
            aria-label={ariaLabel}
            aria-hidden={!isOpen}
            role="button"
            tabIndex={isOpen ? 0 : -1}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            className={classNames("fixed inset-0 z-40 cursor-pointer bg-black/50 transition-opacity duration-150", {
                "pointer-events-auto opacity-100": isOpen,
                "pointer-events-none opacity-0": !isOpen,
            })}
        />
    );
};

export default Backdrop;
