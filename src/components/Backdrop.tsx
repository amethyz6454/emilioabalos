import classNames from "classnames";
import React, { JSX } from "react";

interface BackdropProps {
    isOpen: boolean;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Backdrop: React.FC<BackdropProps> = (props): JSX.Element => {
    const { isOpen = false, onClick } = props;

    return (
        <div
            onClick={onClick}
            className={classNames(
                "fixed inset-0 z-40 bg-black/50 transition duration-150 ease-in-out",
                { "pointer-events-auto opacity-100": isOpen },
                { "pointer-events-none opacity-0": !isOpen }
            )}
        />
    );
};

export default Backdrop;
