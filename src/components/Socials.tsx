import React, { JSX } from "react";
import Icon from "./Icons";

const Socials: React.FC = (): JSX.Element => {
    return (
        <div className="flex gap-4">
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
