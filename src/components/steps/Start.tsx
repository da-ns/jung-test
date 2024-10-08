import Button from "../Button.tsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";

const Start = () => {
    const navigate = useNavigate();
    const { reset }: IssueContextType = useIssue();
    const { t } = useTranslation();

    const m = {
        message: t("test.start.message"),
        ready: t("test.start.ready"),
    };

    const handleClickReady = () => {
        navigate("/test/issue");
    };

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <p className="text-xl text-center">{parse(m.message)}</p>

            <div className="flex m-10 justify-center">
                <Button onClick={handleClickReady}>{m.ready}</Button>
            </div>
        </>
    )
}

export default Start