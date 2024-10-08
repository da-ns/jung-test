import TextInput from "../TextInput";
import useIssue from "../../context/IssueContext";
import Button from "../Button.tsx";
import {ChangeEvent, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import {IssueContextType} from "../../@types/IssueContextType";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";

const Issue = () => {
    const navigate = useNavigate();
    const { issue, setFact }: IssueContextType = useIssue();
    const [ word, setWord ] = useState("");
    const { t } = useTranslation();

    const m = {
        message: t("test.issue.message"),
        example: t("test.issue.example"),
        next: t("test.issue.next"),
    };

    const handleChangeFact = (event: ChangeEvent<HTMLInputElement>) : void => {
        setWord((event.target as HTMLInputElement).value);
    };

    const handleClickNext = () => {
        if (word !== "") {
            setFact(word);
        }
    };

    const handleEnter = () : void => {
        handleClickNext();
    };

    useEffect(() => {
        if (word !== "") {
            navigate("/test/association");
        }
    }, [issue]);

    return (
        <>
            <p className="text-xl text-center mb-4">
                {parse(m.message)}
            </p>

            <TextInput
                value={word}
                autofocus={true}
                onChange={handleChangeFact}
                onEnter={handleEnter}
                placeholder={m.example}/>

            <div className="flex m-10 justify-center">
                <Button onClick={handleClickNext}>{m.next}</Button>
            </div>
        </>
    )
}

export default Issue