import React, { ReactNode } from "react";

interface LinkButtonDivProps {
    children: ReactNode;
    className?: string;
    link?: string;
    onClick?: () => void;
    rel?: string;
    target?: string;
}

const LinkButtonDiv: React.FC<LinkButtonDivProps> = ({ link, children, ...rest }) => {
    if (link) {
        return (
            <a href={link} {...rest}>
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
