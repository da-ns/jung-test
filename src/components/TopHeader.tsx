import * as React from "react";

type TopHeaderProps = {
    children: React.ReactNode;
    className?: string;
}

const TopHeader = ({children, className} : TopHeaderProps) => {
    return (
        <h1 className={"text-4xl text-center my-4 " + className}>
            {children}
        </h1>
    )
};

export default TopHeader