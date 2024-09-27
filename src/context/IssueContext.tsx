import {IIssue} from "../@types/IIssue";
import {createContext, ReactNode, useContext, useReducer} from "react";
import {IAssociation} from "../@types/IAssociation";
import {IssueContextType} from "../@types/IssueContextType";

const ASSOCIATIONS_COUNT = 31;

export const EMPTY_ISSUE = {
    fact: null,
    associatoins: new Array<IAssociation>(ASSOCIATIONS_COUNT)
};

export const IssueContext = createContext<IssueContextType>({
    issue: EMPTY_ISSUE,
    setFact: () => {},
    setAssociation: () => {},
});

enum IssueActionType {
    SET_FACT = 'SET_FACT',
    SET_ASSOCIATION = 'SET_ASSOCIATION',
}

export interface IssueAction {
    type: IssueActionType;
    word: string;
    index: number;
    level: number;
}

export const IssueProvider = (prop: {value?: IIssue, children: ReactNode | ReactNode[]}) => {
    const issueReducer = (state: IIssue, action: IssueAction) => {
        const { type, word, index, level } = action;

        switch (type) {
            case IssueActionType.SET_FACT:
                return {
                    ...state,
                    fact: word,
                };
            case IssueActionType.SET_ASSOCIATION:
                console.log("case IssueActionType.SET_ASSOCIATION");

                state.associatoins[index] = {
                    word: word,
                    level: level,
                } as IAssociation;

                return {
                    ...state,
                    associatoins: state.associatoins,
                };
            default:
                return state;
        }
    };

    const [issue, dispatch] = useReducer(issueReducer, EMPTY_ISSUE);

    const setFact = (fact: string) => {
        dispatch({type: IssueActionType.SET_FACT, word: fact, index: 0, level: 0});
    };

    const setAssociation = (association: string, index: number, level: number) => {
        console.log("run setAssociation!");
        dispatch({type: IssueActionType.SET_ASSOCIATION, word: association, index: index, level: level});
    };

    return (
        <IssueContext.Provider value={{ issue, setFact, setAssociation }}>
            {prop.children}
        </IssueContext.Provider>
    );
};

const useIssue = () => useContext<IssueContextType>(IssueContext);

export default useIssue;

