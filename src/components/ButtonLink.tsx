import * as React from "react";

type ButtonLinkProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const ButtonLink = ({children, className, href} : ButtonLinkProps) => {
    return (
        <a href={href} className={
                    `px-4 py-2 bg-indigo-500 
                     border border-transparent rounded-md 
                     font-semibold text-xs text-white uppercase tracking-widest 
                     hover:bg-indigo-600 active:bg-indigo-700 
                     focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                     transition duration-150 ` + className
                }>
            {children}
        </a>
    )
}

export default ButtonLink