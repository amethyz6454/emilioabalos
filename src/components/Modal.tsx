import ModalStyles from "@/styles/components/modal.module.scss";
import classNames from "classnames";
import React, { Fragment, JSX, ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "./Icons";
import Backdrop from "./Backdrop";

export interface ModalCommonProps {
    isOpen: boolean;
    onClose: () => void;
}
interface ModalProps extends ModalCommonProps {
    children: ReactNode;
    isFooterCloseButtonShow?: boolean;
    isFooterShown?: boolean;
    isHeaderShown?: boolean;
    portalId?: string;
    title: string;
}

const Modal: React.FC<ModalProps> = ({
    children,
    isFooterCloseButtonShow = false,
    isFooterShown = true,
    isHeaderShown = true,
    isOpen,
    onClose,
    portalId = "__next",
    title,
}): JSX.Element => {
    const [isBrowser, setIsBrowser] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsBrowser(typeof window !== "undefined");

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose();
        }
    };

    if (!isBrowser) {
        return <Fragment />;
    }

    const modalContent = (
        <Fragment>
            <div
                className={classNames(
                    "fixed top-0 left-0 z-50 h-full w-full overflow-x-hidden overflow-y-auto text-center transition duration-150 ease-in-out",
                    { "pointer-events-auto scale-100": isOpen },
                    { "pointer-events-none scale-0": !isOpen },
                    ModalStyles["modal-outer"]
                )}
                onClick={handleOverlayClick}
            >
                <div
                    ref={modalRef}
                    className="relative inline-block max-h-full min-w-96 text-left align-middle sm:max-w-[50%]"
                >
                    <div
                        ref={modalRef}
                        className="relative flex max-h-full flex-col gap-2 rounded-lg bg-white p-2 shadow-lg sm:p-8"
                    >
                        {isHeaderShown && (
                            <div className="flex grow-0 basis-auto items-center gap-2">
                                <h4 className="grow text-xl">{title}</h4>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="grid h-8 w-8 cursor-pointer place-items-center"
                                >
                                    <Icon name="Close" />
                                </button>
                            </div>
                        )}
                        <div className="grow basis-full">{children}</div>
                        {isFooterShown && (
                            <div className="flex grow-0 basis-auto gap-2">
                                {isFooterCloseButtonShow && (
                                    <Button variant="text" size="large" isFullWidth onClick={onClose}>
                                        Close
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Backdrop isOpen={isOpen} onClick={onClose} />
        </Fragment>
    );

    if (portalId) {
        const modalRoot = document.getElementById(portalId);
        if (modalRoot) {
            return ReactDOM.createPortal(modalContent, modalRoot);
        } else {
            console.error(`Modal root element with id "${portalId}" not found.`);
            return <Fragment />;
        }
    }

    return modalContent;
};

export default Modal;
