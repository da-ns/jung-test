import * as React from "react";

type SecondHeaderProps = {
    children: React.ReactNode;
    className?: string;
}

const SecondHeader = ({children, className} : SecondHeaderProps) => {
    return (
        <h1 className={"text-xl text-center my-3 " + className}>
            {children}
        </h1>
    )
};

export default SecondHeader