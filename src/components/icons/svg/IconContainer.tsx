import React, { JSX } from "react";

export interface IconCommonProps {
    size?: number;
    colorPrimary?: string;
    colorSecondary?: string;
    title?: string;
}

interface IconContainerProps {
    children: React.ReactNode;
    size?: number;
    viewBox?: string;
    fill?: string;
    title: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
    children,
    size = 800,
    viewBox = "0 0 24 24",
    fill = "none",
    title,
}): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox} fill={fill} role="img">
            <title>{title}</title>
            {children}
        </svg>
    );
};

export default IconContainer;
