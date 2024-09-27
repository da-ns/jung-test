import * as React from "react";
import {MouseEventHandler} from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: MouseEventHandler<HTMLSpanElement>;
    className?: string;
}

const Button = ({children, onClick, className} : ButtonProps) => {
    return (
        <span onClick={onClick} className={
                `px-4 py-2 bg-indigo-500 
                 cursor-pointer
                 border border-transparent rounded-md 
                 font-semibold text-xs text-white uppercase tracking-widest whitespace-nowrap 
                 hover:bg-indigo-600 active:bg-indigo-200 
                 focus:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                 transition duration-150 ` + className
            }>
            {children}
        </span>
    )
};

export default Button