import ButtonLink from "../ButtonLink.tsx";
import {useLocation} from "react-router-dom";

const Start = () => {
    const url = useLocation();

    return (
        <>
            <p className="text-xl text-center">So let's begin!<br/> First, make sure that no one will disturb you in the
                next 15-20 minutes. Relax.</p>

            <div className="flex m-10 justify-center">
                <ButtonLink to={url.pathname + "/issue"}>I'm ready</ButtonLink>
            </div>
        </>
    )
}

export default Start