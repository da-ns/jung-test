import Button from "../Button.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";

const Start = () => {
    const navigate = useNavigate();
    const { reset }: IssueContextType = useIssue();

    const handleClickReady = () => {
        navigate("/test/issue");
    };

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <p className="text-xl text-center">So let's begin!<br/> First, make sure that no one will disturb you in the
                next 15-20 minutes. Relax.</p>

            <div className="flex m-10 justify-center">
                <Button onClick={handleClickReady}>I'm ready</Button>
            </div>
        </>
    )
}

export default Start