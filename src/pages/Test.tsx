import { Outlet } from "react-router-dom";
import { useState } from "react";
import {IIssue} from "../@types/IIssue";
import { IssueContext } from "../context/IssueContext";

const Test = () => {
    const [issue, setIssue] = useState<IIssue>({
        fact: null
    });

    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <IssueContext.Provider value={{ issue: issue, saveIssue: setIssue }}>
                <Outlet/>
            </IssueContext.Provider>
        </div>
    );
}

export default Test