import ApplicationTitle from "@/components/ApplicationTitle";
import Button from "@/components/Button";
import Socials from "@/components/Socials";
import useMediaQuery from "@/library/hooks/useMediaQuery";
import ContainerStyle from "@/styles/components/container.module.scss";
import HeaderStyle from "@/styles/layouts/header.module.scss";
import classNames from "classnames";
import Link from "next/link";
import React, { JSX } from "react";

const HeaderLayout: React.FC = (): JSX.Element => {
    const sm = useMediaQuery("(min-width: 640px)");

    return (
        <header className={classNames(HeaderStyle.header, "fixed inset-0 bottom-auto z-30 shadow-lg")}>
            <div className={classNames(ContainerStyle.container, "flex items-center justify-between")}>
                <Link href="/">
                    <ApplicationTitle size={sm ? 24 : 12} />
                </Link>

                <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        <Button href="/" variant="text" size={sm ? "large" : "medium"}>
                            Works
                        </Button>
                        <Button href="/about" variant="text" size={sm ? "large" : "medium"}>
                            About
                        </Button>
                    </div>

                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default HeaderLayout;
