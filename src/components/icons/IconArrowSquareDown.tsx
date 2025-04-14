import React, { JSX } from "react";
import IconContainer, { IconCommonProps } from "./svg/IconContainer";

const IconArrowSquareDown: React.FC<IconCommonProps> = ({
    size = 24,
    colorPrimary = "var(--icon-primary-color)",
    colorSecondary = "var(--icon-secondary-color)",
}): JSX.Element => {
    return (
        <IconContainer size={size}>
            <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke={colorSecondary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 8.5V14.5"
                stroke={colorPrimary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M9 12.5L12 15.5L15 12.5"
                stroke={colorPrimary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </IconContainer>
    );
};

export default IconArrowSquareDown;
