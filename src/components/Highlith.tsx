import * as React from "react";

type HighlightProps = {
    children: React.ReactNode;
    className?: string;
}

const Highlight = ({children, className} : HighlightProps) => {
    return (
        <div className={"w-min bg-indigo-50 border rounded-lg border-indigo-200 p-1 mb-2 text-center "
            + (className === undefined ? "" : className)}>
            {children}
        </div>
    )
};

export default Highlight