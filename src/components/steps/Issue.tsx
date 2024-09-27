import TextInput from "../TextInput";
import useIssue from "../../context/IssueContext";
import Button from "../Button.tsx";
import {ChangeEvent, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {IssueContextType} from "../../@types/IssueContextType";

const Issue = () => {
    const navigate = useNavigate();
    const { issue, setFact }: IssueContextType = useIssue();

    const handleChangeFact = (event: ChangeEvent<HTMLInputElement>) : void => {
        issue.fact = (event.target as HTMLInputElement).value;
    };

    const handleClickNext = () => {
        if (issue.fact != null) {
            setFact(issue.fact);
        }
    };

    const handleEnter = () : void => {
        handleClickNext();
    };

    useEffect(() => {
        if (issue.fact != null) {
            navigate("/test/association");
        }
    }, [issue]);

    return (
        <>
            <p className="text-xl text-center mb-4">
                Great! The first step is to formulate the problem.
                <br/>Think about a topic that worries you and give it
                a simple formulation consisting of a minimum of words.
            </p>

            <TextInput
                value={issue.fact}
                autofocus={true}
                onChange={handleChangeFact}
                onEnter={handleEnter}
                placeholder="For example, “relationship with mom”, “job search”, “fatigue”..."/>

            <div className="flex m-10 justify-center">
                <Button onClick={handleClickNext}>Next</Button>
            </div>
        </>
    )
}

export default Issue