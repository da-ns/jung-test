import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Highlight from "../Highlith.tsx";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";
import {IAssociation} from "../../@types/IAssociation";

const Schema = () => {
    const navigate = useNavigate();
    const { issue }: IssueContextType = useIssue();
    const [stat, setStat] = useState<{min: number, normalMin: number, median: number, normalMax: number, max: number} | null>(null);
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

    const arrayStatistic = (numbers: number[])
        : { min: number, normalMin: number, median: number, normalMax: number, max: number } | null => {

        if (!numbers) return null;

        const sorted = Array.from(numbers).sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);

        const min = sorted[0];
        const max = sorted[sorted.length - 1];
        let median = sorted[middle];

        if (sorted.length % 2 === 0) {
            median = (sorted[middle - 1] + sorted[middle]) / 2;
        }

        return {
            min: min,
            normalMin: min + Math.floor(((median - min) / 50) * 10),
            median: median,
            normalMax: max - Math.floor(((max - median) / 50) * 10),
            max: max
        };
    }

    const printLevelItems = (level: number) : ReactNode => {
        const associations = getLevelItems(level);
        console.log(stat);

        return (
            <div className={"flex flex-col h-full justify-around px-4 items-center"}>
                {associations.map((association, index) => {
                    return (
                        <Highlight key={index}>
                            <span className={
                                stat && stat.normalMin > association.time
                                    ? "italic"
                                    : (stat && stat.normalMax < association.time
                                        ? "font-bold"
                                        : "") }>{association.word}</span>
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

    useEffect(() => {
        setStat(arrayStatistic(issue.associatoins.map((association) => association.time)));
    }, [issue]);

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