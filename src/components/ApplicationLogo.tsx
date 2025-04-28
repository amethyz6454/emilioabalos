import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

interface ApplicationLogoProps {
    size?: number;
}

const ApplicationLogo: React.FC<ApplicationLogoProps> = (props): JSX.Element => {
    const { size = 80 } = props;

    return (
        <Link href="/" className="flex items-center justify-center">
            <Image src="/app-logo.png" height={size} width={size} alt={process.env.NEXT_PUBLIC_APP_NAME as string} />
        </Link>
    );
};

export default ApplicationLogo;
