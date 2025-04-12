import React, { JSX } from "react";
import IconContainer, { IconCommonProps } from "./svg/IconContainer";

const IconLinkedIn: React.FC<IconCommonProps> = ({
    size = 24,
    colorPrimary = "var(--icon-primary-color)",
    colorSecondary = "var(--icon-secondary-color)",
}): JSX.Element => {
    return (
        <IconContainer size={size}>
            <path d="M0,24V0H24V24H0Z" fill={colorSecondary} />
            <path
                d="M6.982,16.909H9.188V10.272H6.982v6.637ZM9.24,7.757A1.147,1.147,0,0,0,8.1,7.07a1.15,1.15,0,1,0-.03,2.3H8.087A1.154,1.154,0,0,0,9.24,7.757ZM17.147,13.1c0-2.039-1.088-2.988-2.539-2.988a2.189,2.189,0,0,0-1.988,1.094V10.271H10.41c0.03,0.622,0,6.639,0,6.639h2.208V13.2q0-.068,0-0.136c0-.045.006-0.091,0.012-0.136s0.014-.09.024-0.134,0.022-.088.036-0.131a1.21,1.21,0,0,1,1.13-.807c0.8,0,1.12.609,1.12,1.5v3.55h2.206V13.1Zm-4.528-1.868H12.6l0.015-.022v0.022Z"
                fill={colorPrimary}
            />
        </IconContainer>
    );
};

export default IconLinkedIn;
