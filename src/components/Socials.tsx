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

    return !isButton ? (
        <ul className={classNames("flex gap-4", direction === "column" ? "flex-col" : "flex-row")}>
            <li>
                <a
                    href="https://www.linkedin.com/in/emilioabalos/"
                    aria-label="Linked-In"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon name="LinkedIn" />
                </a>
            </li>
            <li>
                <a href="mailto:emilioabalos.15@gmail.com" aria-label="Contact Me">
                    <Icon name="Envelope" />
                </a>
            </li>
        </ul>
    ) : (
        <ul className={classNames("flex", direction === "column" ? "flex-col" : "flex-row")}>
            <li>
                <NavigationItem
                    href="https://www.linkedin.com/in/emilioabalos/"
                    aria-label="Linked-In"
                    target="_blank"
                >
                    <Icon name="LinkedIn" />
                    <span>LinkedIn</span>
                </NavigationItem>
            </li>
            <li>
                <NavigationItem href="mailto:emilioabalos.15@gmail.com" aria-label="Contact Me">
                    <Icon name="Envelope" />
                    <span>Contact Me</span>
                </NavigationItem>
            </li>
        </ul>
    );
};

export default Socials;
