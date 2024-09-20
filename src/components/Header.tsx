import * as React from "react";

type HeaderProps = {
    children: React.ReactNode;
    className?: string;
}

const Header = ({children, className} : HeaderProps) => {
    return (
        <h1 className={"text-2xl text-center my-10 " + className}>
            {children}
        </h1>
    )
}

export default Header