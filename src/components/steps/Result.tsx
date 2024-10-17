import ButtonLink from "../ButtonLink.tsx";
import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SecondaryButtonLink from "../SecondaryButtonLink.tsx";
import Highlight from "../Highlith.tsx";
import TopHeader from "../TopHeader.tsx";
import SecondHeader from "../SecondHeader.tsx";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";

const Result = () => {
    const navigate = useNavigate();
    const { issue }: IssueContextType = useIssue();
    const { t } = useTranslation();

    const m = {
        message: t("test.result.message"),
        title: t("test.result.title"),
        description: t("test.result.description"),
        firstLayerTitle: t("test.result.first-layer-title"),
        firstLayerDescription: t("test.result.first-layer-description"),
        secondLayerTitle: t("test.result.second-layer-title"),
        secondLayerDescription0: t("test.result.second-layer-description[0]"),
        secondLayerDescription1: t("test.result.second-layer-description[1]"),
        thirdLayerTitle: t("test.result.third-layer-title"),
        thirdLayerDescription: t("test.result.third-layer-description"),
        fourthLayerTitle: t("test.result.fourth-layer-title"),
        fourthLayerDescription: t("test.result.fourth-layer-description"),
        fiveLayerTitle: t("test.result.five-layer-title"),
        fiveLayerDescription0: t("test.result.five-layer-description[0]"),
        fiveLayerDescription1: t("test.result.five-layer-description[1]"),
        fiveLayerDescription2: t("test.result.five-layer-description[2]"),
        fiveLayerDescription3: t("test.result.five-layer-description[3]"),
        schema: t("test.result.schema"),
        startAgain: t("test.result.start-again")
    };

    const getLevelItems = (level: number) : string[] => {
        return issue
            .associatoins
            .filter((association) =>  association.level == level)
            .map((association) => association.word);
    }

    const getKey = () : string => {
        return issue
            .associatoins[issue.associatoins.length - 1]
            .word;
    }

    const printLevelItems = (level: number) : ReactNode => {
        const words = getLevelItems(level);

        return (
            <div className={"flex flex-wrap justify-center mb-2"}>
                {words.map((word, index) => {
                    return <div key={index} className={"mr-2"}><Highlight>{word}</Highlight></div>
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
            <p className="text-xl text-center">{m.message}</p>

            <div className={"flex justify-center my-4"}>
                <img src={"/thinking.png"} width={90} height={90} alt={""}/>
            </div>

            <TopHeader>{m.title}</TopHeader>

            <p className="mb-4">{m.description}</p>

            <SecondHeader>{m.firstLayerTitle}</SecondHeader>

            {printLevelItems(0)}

            <p className="mb-4">{m.firstLayerDescription}</p>

            <SecondHeader>{m.secondLayerTitle}</SecondHeader>

            {printLevelItems(1)}

            <p className="mb-4">{m.secondLayerDescription0}</p>

            <p className="mb-4">{m.secondLayerDescription1}</p>

            <SecondHeader>{m.thirdLayerTitle}</SecondHeader>

            {printLevelItems(2)}

            <p className="mb-4">{m.thirdLayerDescription}</p>

            <SecondHeader>{m.fourthLayerTitle}</SecondHeader>

            {printLevelItems(3)}

            <p className="mb-4">{m.fourthLayerDescription}</p>

            <SecondHeader>{m.fiveLayerTitle}</SecondHeader>

            <p className="mb-4">{m.fiveLayerDescription0}</p>

            <div className={"flex justify-center text-4xl mb-4"}>
                <Highlight>{issue.fact}</Highlight>&nbsp;&rarr;&nbsp;<Highlight>{getKey()}</Highlight>
            </div>

            <p className="mb-4">{m.fiveLayerDescription1}</p>

            <p className="mb-4">{m.fiveLayerDescription2}</p>

            <p className="mb-4">{parse(m.fiveLayerDescription3)}</p>

            <div className="flex m-10 justify-center">
                <SecondaryButtonLink className={"mr-2"} to={"/test/schema"}>{m.schema}</SecondaryButtonLink>
                <ButtonLink to={"/test"}>{m.startAgain}</ButtonLink>
            </div>
        </>
    )
};

export default Result