import ButtonLink from "../ButtonLink.tsx";
import {useLocation} from "react-router-dom";
import TextInput from "../TextInput.tsx";

const Issue = () => {
    const url = useLocation();

    return (
        <>
            <p className="text-xl text-center mb-4">
                Great! The first step is to formulate the problem.
                <br/>Think about a topic that worries you and give it
                a simple formulation consisting of a minimum of words.
            </p>

            <TextInput placeholder="For example, “relationship with mom”, “job search”, “fatigue”..."/>

            <div className="flex m-10 justify-center">
                <ButtonLink to={url.pathname}>Next</ButtonLink>
            </div>
        </>
    )
}

export default Issue