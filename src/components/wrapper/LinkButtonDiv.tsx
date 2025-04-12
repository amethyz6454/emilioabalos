import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, MouseEventHandler } from "react";

type LinkButtonDivProps = {
    children: React.ReactNode;
    link?: string | null;
    onClick?: MouseEventHandler<HTMLElement>;
    className?: string;
} & (
    | ({ link: string; onClick?: never; type?: never } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({
          onClick: MouseEventHandler<HTMLButtonElement>;
          link?: never;
          type?: "button" | "submit" | null;
      } & ButtonHTMLAttributes<HTMLButtonElement>)
    | ({ link?: null; onClick?: never; type?: never } & HTMLAttributes<HTMLDivElement>)
);

const LinkButtonDiv = (props: LinkButtonDivProps) => {
    const { link, onClick, children, ...rest } = props;
    let type: "button" | "submit" | undefined = undefined;

    if (onClick) {
        type = props.type ?? "button";
    }

    if (link) {
        return (
            <a href={link} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
                {children}
            </a>
        );
    }

    if (onClick) {
        return (
            <button onClick={onClick} type={type} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
                {children}
            </button>
        );
    }

    return <div {...(rest as HTMLAttributes<HTMLDivElement>)}>{children}</div>;
};

export default LinkButtonDiv;
