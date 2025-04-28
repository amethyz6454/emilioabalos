import ApplicationTitle from "@/components/ApplicationTitle";
import Button from "@/components/Button";
import IconMenu from "@/components/icons/IconMenu";
import Socials from "@/components/Socials";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import useNavigationStore from "@/library/stores/useNavigationStore";
import ContainerStyle from "@/styles/components/container.module.scss";
import HeaderStyle from "@/styles/layouts/header.module.scss";
import classNames from "classnames";
import Link from "next/link";
import React, { JSX } from "react";

const HeaderLayout: React.FC = (): JSX.Element => {
    // stores and hooks
    const sm = useMediaQuery("(min-width: 640px)");
    const { setIsNavigationOpen } = useNavigationStore();

    return (
        <header className={classNames(HeaderStyle.header, "fixed inset-0 bottom-auto z-39 flex shadow-lg sm:hidden")}>
            <div className={classNames(ContainerStyle.container, "flex items-center justify-between")}>
                <Link href="/">
                    <ApplicationTitle size={sm ? 24 : 20} />
                </Link>

                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <Button
                            variant="text"
                            isSharp
                            composition="square"
                            size="large"
                            onClick={() => setIsNavigationOpen(true)}
                        >
                            <IconMenu />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderLayout;
