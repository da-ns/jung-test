import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Highlight from "../Highlith.tsx";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";
import {IAssociation} from "../../@types/IAssociation";

const Schema = () => {
    const navigate = useNavigate();
    const { issue }: IssueContextType = useIssue();
    const { t } = useTranslation();

    const m = {
        title: parse(t("test.schema.title"))
    };

    const getLevelItems = (level: number) : IAssociation[] => {
        return issue
            .associatoins
            .filter((association) => association.level == level);
    }

    const toSeconds = (time: number) : number => {
        return time / 1000;
    }

    const printLevelItems = (level: number) : ReactNode => {
        const associations = getLevelItems(level);

        return (
            <div className={"flex flex-col h-full justify-around px-4 items-center"}>
                {associations.map((association, index) => {
                    return (
                        <Highlight key={index}>
                            {association.word}
                            <sup>{toSeconds(association.time)}&nbsp;с</sup>
                        </Highlight>
                    )
                })}
            </div>
        )
    };

    useEffect(() => {
        if (issue.fact == null) {
            navigate("/test");
        }
    }, []);

    return (
        <>
            <div className={"text-center text-2xl"}>
                {m.title}
            </div>

            <div className={"text-center text-3xl font-bold mt-4 mb-10"}>{issue.fact}</div>

            <div className={"flex mb-10"}>
                <div className={"border-r-2"}>
                    {printLevelItems(0)}
                </div>
                <div className={"border-r-2"}>
                    {printLevelItems(1)}
                </div>
                <div className={"border-r-2"}>
                    {printLevelItems(2)}
                </div>
                <div className={"border-r-2"}>
                    {printLevelItems(3)}
                </div>
                <div className={"font-bold"}>
                    {printLevelItems(4)}
                </div>
            </div>
        </>
    )
}

export default Schema