import React, { JSX } from "react";

export interface IconCommonProps {
    size?: number;
    colorPrimary?: string;
    colorSecondary?: string;
}

interface IconContainerProps {
    children: React.ReactNode;
    size?: number;
    viewBox?: string;
    fill?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({
    children,
    size = 800,
    viewBox = "0 0 24 24",
    fill = "none",
}): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={viewBox} fill={fill}>
            {children}
        </svg>
    );
};

export default IconContainer;
