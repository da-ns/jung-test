import {IAssociation} from "./IAssociation";

export type IIssue = {
    fact: string | null;
    associatoins: Array<IAssociation>;
};