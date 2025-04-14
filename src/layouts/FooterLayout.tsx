import Socials from "@/components/Socials";
import FooterStyles from "@/styles/layouts/footer.module.scss";
import classNames from "classnames";
import React, { JSX } from "react";

const FooterLayout: React.FC = (): JSX.Element => {
    return (
        <footer className={classNames("grid place-items-center gap-4 p-12 text-xs opacity-25", FooterStyles.footer)}>
            <Socials />
            <div>
                Copyright &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME as string}. All Rights
                Reserved
            </div>
        </footer>
    );
};

export default FooterLayout;
