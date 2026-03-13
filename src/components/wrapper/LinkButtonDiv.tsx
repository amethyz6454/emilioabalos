import React, { ReactNode } from "react";

interface LinkButtonDivProps {
    children: ReactNode;
    className?: string;
    link?: string;
    onClick?: () => void;
    rel?: string;
    target?: string;
}

const LinkButtonDiv: React.FC<LinkButtonDivProps> = ({ link, children, target, ...rest }) => {
    if (link) {
        return (
            <a
                href={link}
                {...rest}
                role="button"
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {children}
            </a>
        );
    }

    return (
        <button type="button" {...rest}>
            {children}
        </button>
    );
};

export default LinkButtonDiv;
