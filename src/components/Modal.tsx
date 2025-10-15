import ModalStyles from "@/styles/components/modal.module.scss";
import classNames from "classnames";
import React, { Fragment, JSX, ReactNode, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Icon from "./Icons";
import Backdrop from "./Backdrop";

export interface ModalCommonProps {
    isOpen: boolean;
    onClose: () => void;
}
interface ModalProps extends ModalCommonProps {
    /**
     * The content to display inside the modal.
     */
    children: ReactNode;
    /**
     * If `true`, a "Close" button will be shown in the footer.
     * @default false
     */
    isFooterCloseButtonShow?: boolean;
    /**
     * If `true`, the modal footer will be displayed.
     * @default true
     */
    isFooterShown?: boolean;
    /**
     * If `true`, the modal header will be displayed.
     * @default true
     */
    isHeaderShown?: boolean;
    /**
     * The ID of the element to render the modal into.
     * @default "__next"
     */
    portalId?: string;
    /**
     * The title of the modal, displayed in the header.
     */
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
}): JSX.Element | null => {
    const modalRef = useRef<HTMLDivElement>(null);
    const lastActiveElementRef = useRef<HTMLElement | null>(null);
    const titleId = `modal-title-${React.useId()}`;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        const trapFocus = (event: KeyboardEvent) => {
            if (event.key !== "Tab" || !modalRef.current) return;

            const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    event.preventDefault();
                }
            } else {
                // Tab
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    event.preventDefault();
                }
            }
        };

        if (isOpen) {
            lastActiveElementRef.current = document.activeElement as HTMLElement;
            document.body.style.overflow = "hidden";
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keydown", trapFocus);

            // Set focus to the modal itself or the first focusable element
            setTimeout(() => modalRef.current?.focus(), 0);
        } else {
            lastActiveElementRef.current?.focus();
        }

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keydown", trapFocus);
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    // Avoid rendering on the server
    if (typeof window === "undefined") {
        return <Fragment />;
    }

    const modalContent = (
        <Fragment>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className={classNames(
                    "fixed top-0 left-0 z-50 h-full w-full overflow-x-hidden overflow-y-auto text-center transition duration-150 ease-in-out",
                    isOpen ? "pointer-events-auto scale-100" : "pointer-events-none scale-0",
                    ModalStyles["modal-outer"]
                )}
                onClick={handleOverlayClick}
            >
                <div
                    ref={modalRef}
                    className="relative inline-block max-h-full min-w-96 text-left align-middle outline-none sm:max-w-[50%]"
                >
                    <div className="relative flex max-h-full flex-col gap-2 rounded-lg bg-white p-2 shadow-lg sm:p-8">
                        {isHeaderShown && (
                            <div className="flex grow-0 basis-auto items-center gap-2">
                                <h4 id={titleId} className="grow text-xl">
                                    {title}
                                </h4>
                                <button
                                    type="button"
                                    aria-label="Close modal"
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
                                    <Button variant="text" size="large" isFullWidth onClick={onClose} color="secondary">
                                        Close
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Backdrop isOpen={isOpen} onClick={() => onClose()} />
        </Fragment>
    );

    const modalRoot = document.getElementById(portalId);

    if (!modalRoot) {
        // Log an error in development, but don't crash the app
        if (process.env.NODE_ENV !== "production") {
            console.error(`Modal root element with id "${portalId}" not found.`);
        }
        return null; // Render nothing if portal root is not found
    }

    return ReactDOM.createPortal(modalContent, modalRoot);
};

export default Modal;
