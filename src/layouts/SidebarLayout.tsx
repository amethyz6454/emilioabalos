import Icon from "@/components/Icons";
import SidebarStyles from "@/styles/layouts/sidebar.module.scss";
import classNames from "classnames";
import React, { JSX } from "react";
import NavigationItem from "./partials/NavigationItem";

const SidebarLayout: React.FC = (): JSX.Element => {
    return (
        <aside className={classNames("sticky top-0 left-0 flex grow-0 flex-col", SidebarStyles.sidebar)}>
            <NavigationItem isActive>
                <Icon name="Dashboard" />
                <span>Projects</span>
            </NavigationItem>
            <NavigationItem>
                <Icon name="Work" />
                <span>Work</span>
            </NavigationItem>
            <NavigationItem>
                <Icon name="UserSquare" />
                <span>Milo</span>
            </NavigationItem>
            <NavigationItem>test</NavigationItem>
        </aside>
    );
};

export default SidebarLayout;
