import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Highlight from "../Highlith.tsx";

const Schema = () => {
    const navigate = useNavigate();
    const { issue }: IssueContextType = useIssue();

    const getLevelItems = (level: number) : string[] => {
        return issue
            .associatoins
            .filter((association) =>  association.level == level)
            .map((association) => association.word);
    }

    const printLevelItems = (level: number) : ReactNode => {
        const words = getLevelItems(level);

        return (
            <div className={"flex flex-col h-full justify-around px-4"}>
                {words.map((word, index) => {
                    return <Highlight key={index}>{word}</Highlight>
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
            <div className={"text-center-center text-2xl"}>
                Schema of associative series on request:
            </div>

            <div className={"text-center text-3xl font-bold mt-4 mb-10"}>{issue.fact}</div>

            <div className={"flex mb-10 justify-center"}>
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