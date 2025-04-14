import React, { JSX } from "react";
import IconContainer, { IconCommonProps } from "./svg/IconContainer";

const IconMenu: React.FC<IconCommonProps> = ({
    size = 24,
    colorPrimary = "var(--icon-primary-color)",
    colorSecondary = "var(--icon-secondary-color)",
}): JSX.Element => {
    return (
        <IconContainer size={size}>
            <path
                d="M3 7H21"
                stroke={colorSecondary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 12H21"
                stroke={colorPrimary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 17H21"
                stroke={colorSecondary}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </IconContainer>
    );
};

export default IconMenu;
