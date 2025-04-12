import dynamic from "next/dynamic";
import React, { JSX } from "react";
import { IconCommonProps } from "./icons/svg/IconContainer";

export type IconNames = "Close" | "Dashboard" | "UserSquare" | "Work";

interface IconProps extends IconCommonProps {
    name: IconNames;
}

const DynamicIconClose = dynamic(() =>
    import("@/components/icons/IconClose").then((mod) => mod.default)
) as React.FC<IconCommonProps>;
const DynamicIconDashboard = dynamic(() =>
    import("@/components/icons/IconDashboard").then((mod) => mod.default)
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
        Close: <DynamicIconClose {...populateProps} />,
        Dashboard: <DynamicIconDashboard {...populateProps} />,
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
