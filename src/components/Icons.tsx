import dynamic from "next/dynamic";
import React, { JSX } from "react";
import { IconCommonProps } from "./icons/svg/IconContainer";

export type IconNames =
    | "ArrowSquareDown"
    | "ArrowSquareLeft"
    | "Close"
    | "Dashboard"
    | "Envelope"
    | "LinkedIn"
    | "Menu"
    | "UserSquare"
    | "Work";

interface IconProps extends IconCommonProps {
    name: IconNames;
}

const DynamicIconArrowSquareDown = dynamic(() =>
    import("@/components/icons/IconArrowSquareDown").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconArrowSquareLeft = dynamic(() =>
    import("@/components/icons/IconArrowSquareLeft").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconClose = dynamic(() =>
    import("@/components/icons/IconClose").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconDashboard = dynamic(() =>
    import("@/components/icons/IconDashboard").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconEnvelope = dynamic(() =>
    import("@/components/icons/IconEnvelope").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconLinkedIn = dynamic(() =>
    import("@/components/icons/IconLinkedIn").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconMenu = dynamic(() =>
    import("@/components/icons/IconMenu").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconUserSquare = dynamic(() =>
    import("@/components/icons/IconUserSquare").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconWork = dynamic(() =>
    import("@/components/icons/IconWork").then((mod) => mod.default)
) as React.FC<IconCommonProps>;

const IconRenders = ({ size, colorPrimary, colorSecondary }: IconCommonProps): Record<IconNames, JSX.Element> => {
    const populateProps = {
        size,
        colorPrimary,
        colorSecondary,
    };

    return {
        ArrowSquareDown: <DynamicIconArrowSquareDown {...populateProps} />,
        ArrowSquareLeft: <DynamicIconArrowSquareLeft {...populateProps} />,
        Close: <DynamicIconClose {...populateProps} />,
        Dashboard: <DynamicIconDashboard {...populateProps} />,
        Envelope: <DynamicIconEnvelope {...populateProps} />,
        LinkedIn: <DynamicIconLinkedIn {...populateProps} />,
        Menu: <DynamicIconMenu {...populateProps} />,
        UserSquare: <DynamicIconUserSquare {...populateProps} />,
        Work: <DynamicIconWork {...populateProps} />,
    };
};

const Icon: React.FC<IconProps> = ({
    name,
    size = 24,
    colorPrimary = "var(--icon-primary-color)",
    colorSecondary = "var(--icon-secondary-color)",
}): JSX.Element => {
    const icons = IconRenders({ size, colorPrimary, colorSecondary });
    return icons[name];
};

export default Icon;
