import {IIssue} from "./IIssue";

export type IssueContextType = {
    issue: IIssue;
    setFact: (fact: string) => void;
    setAssociation: (association: string, index: number, level: number, time: number) => void;
    reset: () => void;
};