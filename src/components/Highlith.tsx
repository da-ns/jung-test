import * as React from "react";

type HighlightProps = {
    children: React.ReactNode;
    className?: string;
}

const Highlight = ({children, className} : HighlightProps) => {
    return (
        <div className={"w-min bg-indigo-50 border rounded-lg border-indigo-200 " +
            "p-1 pb-2 mb-2 flex items-center text-center text-nowrap"
            + (className === undefined ? "" : className)}>
            {children}
        </div>
    )
};

export default Highlight