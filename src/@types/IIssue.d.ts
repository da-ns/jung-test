export type IIssue = {
    fact: string | null;
    reality?: string[];
    mind?: string[];
    feelings?: string[];
    root?: string[];
    key?: string;
};

export type IssueContextType = {
    issue: IIssue;
    saveIssue: (issue: IIssue) => void;
};