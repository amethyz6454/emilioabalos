import ApplicationLogo from "@/components/ApplicationLogo";
import Backdrop from "@/components/Backdrop";
import Icon from "@/components/Icons";
import Socials from "@/components/Socials";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import useNavigationStore from "@/library/stores/useNavigationStore";
import SidebarStyles from "@/styles/layouts/sidebar.module.scss";
import classNames from "classnames";
import { useRouter } from "next/router";
import React, { Fragment, JSX, useEffect } from "react";
import NavigationItem from "./partials/NavigationItem";

const SidebarLayout: React.FC = (): JSX.Element => {
    // route
    const route = useRouter();

    // stores and hooks
    const { targetName, isNavigationOpen, setTargetName, setIsNavigationOpen } = useNavigationStore();
    const sm = useMediaQuery("(min-width: 640px)");

    // handlers
    const handleNavigation = (name: string, pushRoute: string) => {
        return {
            isActive: targetName === name,
            onClick: () => {
                setTargetName(name);
                !sm && setIsNavigationOpen(false);
                route.push(pushRoute);
            },
        };
    };

    // useEffects
    useEffect(() => {
        if (route.pathname === "/about") {
            setTargetName("Milo");
        }
    }, []);

    return (
        <Fragment>
            <aside
                className={classNames(
                    "top-0 left-0 z-50 flex h-dvh min-h-dvh grow-0 flex-col shadow-2xl transition duration-150 ease-in-out sm:shadow-none",
                    { sticky: sm },
                    { fixed: !sm },
                    { "-translate-x-full sm:translate-x-0": !isNavigationOpen && !sm },
                    SidebarStyles.sidebar
                )}
            >
                <ApplicationLogo />
                <div className="flex grow flex-col">
                    <NavigationItem {...handleNavigation("Work", "/")}>
                        <Icon name="Work" />
                        <span>Work</span>
                    </NavigationItem>
                    <NavigationItem {...handleNavigation("Milo", "/about")}>
                        <Icon name="UserSquare" />
                        <span>Milo</span>
                    </NavigationItem>
                </div>
                <div className="grid grow-0 place-items-center">
                    <Socials direction="column" isButton />
                </div>
            </aside>
            <Backdrop isOpen={isNavigationOpen} onClick={() => setIsNavigationOpen(false)} />
        </Fragment>
    );
};

export default SidebarLayout;
