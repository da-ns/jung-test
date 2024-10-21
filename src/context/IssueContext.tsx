import {IIssue} from "../@types/IIssue";
import {createContext, ReactNode, useContext, useEffect, useReducer} from "react";
import {IAssociation} from "../@types/IAssociation";
import {IssueContextType} from "../@types/IssueContextType";
import {useLocalStorage} from "@uidotdev/usehooks";

const ASSOCIATIONS_COUNT = 31;

export const IssueContext = createContext<IssueContextType>({
    issue: {
        fact: null,
        associatoins: new Array<IAssociation>(ASSOCIATIONS_COUNT)
    },
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
    time: number;
}

export const IssueProvider = (prop: {value?: IIssue, children: ReactNode | ReactNode[]}) => {
    const issueReducer = (state: IIssue, action: IssueAction) => {
        const { type, word, index, level, time } = action;

        switch (type) {
            case IssueActionType.SET_FACT:
                return {
                    ...state,
                    fact: word,
                };
            case IssueActionType.SET_ASSOCIATION:
                state.associatoins[index] = {
                    word: word,
                    time: time,
                    level: level,
                } as IAssociation;

                return {
                    ...state,
                    associatoins: state.associatoins,
                };
            case IssueActionType.RESET:
                return {
                    fact: null,
                    associatoins: new Array<IAssociation>(ASSOCIATIONS_COUNT)
                };
            default:
                return state;
        }
    };

    const [localStorageIssue, setLocalStorageIssue] = useLocalStorage<IIssue>("issue", {
        fact: null,
        associatoins: new Array<IAssociation>(ASSOCIATIONS_COUNT)
    });

    const [issue, dispatch] = useReducer(issueReducer, localStorageIssue);

    const setFact = (fact: string) => {
        dispatch({type: IssueActionType.SET_FACT, word: fact, index: 0, level: 0, time: 0});
    };

    const setAssociation = (association: string, index: number, level: number, time: number) => {
        dispatch({type: IssueActionType.SET_ASSOCIATION, word: association, index: index, level: level, time: time});
    };

    const reset = () => {
        dispatch({type: IssueActionType.RESET, word: "", index: 0, level: 0, time: 0});
    };

    useEffect(() => {
        setLocalStorageIssue(issue);
    }, [issue]);

    return (
        <IssueContext.Provider value={{ issue, setFact, setAssociation, reset }}>
            {prop.children}
        </IssueContext.Provider>
    );
};

const useIssue = () => useContext<IssueContextType>(IssueContext);

export default useIssue;

