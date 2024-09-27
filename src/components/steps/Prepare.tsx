import ButtonLink from "../ButtonLink.tsx";
import {useLocation} from "react-router-dom";

const Prepare = () => {
    const url = useLocation();

    return (
        <>
            <p className="text-xl text-center">Amazing! The request is ready. Now we need all your attention.
                Try not to let anyone distract you until the end of the test. Now you need to come up
                with associations for the phrases that will be shown on the screen as quickly as possible.</p>

            <div className="flex m-10 justify-center">
                <ButtonLink to={url.pathname + "/association"}>I'm ready</ButtonLink>
            </div>
        </>
    )
}

export default Prepare