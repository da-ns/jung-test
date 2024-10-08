import * as React from "react";
import {Link} from "react-router-dom";

type ButtonLinkProps = {
    children: React.ReactNode;
    to: string;
    className?: string;
}

const ButtonLink = ({children, to, className} : ButtonLinkProps) => {
    return (
        <Link to={to} className={
                    `px-4 py-2 bg-indigo-500 
                     cursor-pointer
                     border border-transparent rounded-md 
                     font-semibold text-xs text-white uppercase tracking-widest whitespace-nowrap 
                     hover:bg-indigo-600 active:bg-indigo-200 
                     focus:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                     transition duration-150 ` + className
                }>
            {children}
        </Link>
    )
};

export default ButtonLink