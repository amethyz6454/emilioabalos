import NavigationItem from "@/layouts/partials/NavigationItem";
import classNames from "classnames";
import React, { JSX } from "react";
import Icon from "./Icons";

interface SocialProps {
    direction?: "column" | "row";
    isButton?: boolean;
}

const Socials: React.FC<SocialProps> = (props): JSX.Element => {
    const { direction = "row", isButton = false } = props;

    return isButton ? (
        <div className={classNames("flex", direction === "column" ? "flex-col" : "flex-row")}>
            <NavigationItem href="https://www.linkedin.com/in/emilioabalos/" title="Linked-In" target="_blank">
                <Icon name="LinkedIn" />
                <span>LinkedIn</span>
            </NavigationItem>
            <NavigationItem href="mailto:emilioabalos.15@gmail.com" title="Contact Me">
                <Icon name="Envelope" />
                <span>Contact Me</span>
            </NavigationItem>
        </div>
    ) : (
        <div className={classNames("flex gap-4", direction === "column" ? "flex-col" : "flex-row")}>
            <a href="https://www.linkedin.com/in/emilioabalos/" title="Linked-In" target="_blank">
                <Icon name="LinkedIn" />
            </a>
            <a href="mailto:emilioabalos.15@gmail.com" title="Contact Me">
                <Icon name="Envelope" />
            </a>
        </div>
    );
};

export default Socials;
