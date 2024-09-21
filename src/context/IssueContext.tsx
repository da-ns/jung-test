import {IIssue, IssueContextType} from "../@types/IIssue";
import {createContext, ReactNode, useContext, useState} from "react";

export const IssueContext = createContext<IssueContextType>({
    issue: { fact: null },
    saveIssue: () => {}
});

export const IssueProvider = (prop: {value?: IIssue, children: ReactNode | ReactNode[]}) => {
    const [issue, setIssue] = useState<IIssue>({ fact: null });

    const saveIssue = (issue: IIssue) => {
        setIssue(issue);
    };

    return (
        <IssueContext.Provider value={{ issue, saveIssue }}>
            {prop.children}
        </IssueContext.Provider>
    );
};

const useIssue = () => useContext<IssueContextType>(IssueContext);

export default useIssue;

