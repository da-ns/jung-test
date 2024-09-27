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
    reset: () => {}
});

enum IssueActionType {
    SET_FACT = 'SET_FACT',
    SET_ASSOCIATION = 'SET_ASSOCIATION',
    RESET = 'RESET',
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
                state.associatoins[index] = {
                    word: word,
                    level: level,
                } as IAssociation;

                return {
                    ...state,
                    associatoins: state.associatoins,
                };
            case IssueActionType.RESET:
                return {
                    ...EMPTY_ISSUE
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
        dispatch({type: IssueActionType.SET_ASSOCIATION, word: association, index: index, level: level});
    };

    const reset = () => {
        dispatch({type: IssueActionType.RESET, word: "", index: 0, level: 0});
    };

    return (
        <IssueContext.Provider value={{ issue, setFact, setAssociation, reset }}>
            {prop.children}
        </IssueContext.Provider>
    );
};

const useIssue = () => useContext<IssueContextType>(IssueContext);

export default useIssue;

