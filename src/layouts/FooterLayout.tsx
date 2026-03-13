import Socials from "@/components/Socials";
import FooterStyles from "@/styles/layouts/footer.module.scss";
import { cn } from "@/utilities/cn";
import React, { JSX } from "react";

const FooterLayout: React.FC = (): JSX.Element => {
    return (
        <footer className={cn("grid place-items-center gap-4 p-12", FooterStyles.footer)}>
            <Socials />
            <div className="text-xs opacity-60">
                Copyright &copy; {new Date().getFullYear()} {process.env.NEXT_PUBLIC_APP_NAME as string}. All Rights
                Reserved
            </div>
        </footer>
    );
};

export default FooterLayout;
