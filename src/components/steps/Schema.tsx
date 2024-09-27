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
            <>
                {words.map((word) => {
                    return <Highlight>{word}</Highlight>
                })}

            </>
        )
    };

    useEffect(() => {
        if (issue.fact == null) {
            navigate("/test");
        }
    }, []);

    return (
        <>
            <div className={"text-2xl text-center mb-10"}>
                Schema of associative series on request:
                <br/><Highlight>{issue.fact}</Highlight>
            </div>
            <div className={"flex mb-10"}>
                <div className={"flex flex-col justify-around px-4 border-r-2"}>
                    {printLevelItems(0)}
                </div>
                <div className={"flex flex-col justify-around px-4 border-r-2"}>
                    {printLevelItems(1)}
                </div>
                <div className={"flex flex-col justify-around px-4 border-r-2"}>
                    {printLevelItems(2)}
                </div>
                <div className={"flex flex-col justify-around px-4 border-r-2"}>
                    {printLevelItems(3)}
                </div>
                <div className={"flex flex-col justify-around px-4"}>
                    {printLevelItems(4)}
                </div>
            </div>
        </>
    )
}

export default Schema