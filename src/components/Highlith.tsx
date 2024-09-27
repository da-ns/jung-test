import * as React from "react";

type HighlightProps = {
    children: React.ReactNode;
    className?: string;
}

const Highlight = ({children, className} : HighlightProps) => {
    return (
        <span className={"bg-indigo-50 " + className}>
            {children}
        </span>
    )
};

export default Highlight