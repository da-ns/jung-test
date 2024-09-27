import ButtonLink from "../ButtonLink.tsx";
import {IssueContextType} from "../../@types/IssueContextType";
import useIssue from "../../context/IssueContext.tsx";
import {ReactNode, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import SecondaryButtonLink from "../SecondaryButtonLink.tsx";
import Highlight from "../Highlith.tsx";
import TopHeader from "../TopHeader.tsx";
import SecondHeader from "../SecondHeader.tsx";

const Result = () => {
    const navigate = useNavigate();
    const { issue }: IssueContextType = useIssue();

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
            <p className="text-xl text-center">Congratulations! The work of filling out the associations
                has been completed. Now let's see what your subconscious mind thinks
                about the subject of the request.</p>

            <div className={"flex justify-center my-4"}>
                <img src={"/thinking.png"} width={90} height={90} alt={""}/>
            </div>

            <TopHeader>Your results</TopHeader>

            <p className="mb-4">When analyzing the results, it is best to contact a specialist, but let’s try to do it ourselves.</p>

            <SecondHeader>The first layer of associations: the level of reality</SecondHeader>

            {printLevelItems(0)}

            <p className="mb-4">Here you can analyze how much the written words are connected to the real world
                and reflect your real thoughts and ideas.</p>

            <SecondHeader>The second layer of associations: the level of the mind</SecondHeader>

            {printLevelItems(1)}

            <p className="mb-4">It becomes clear to what extent your logical thoughts,
                rational thinking and ability to analyze are reflected.</p>

            <p className="mb-4">If most of the associations in this layer are related to logic and rationality, you have a good
                level of intelligence and analytical skills.</p>

            <SecondHeader>Third layer: level of feelings</SecondHeader>

            {printLevelItems(2)}

            <p className="mb-4">Here you can also analyze the display of
                your emotional state and mood. If most of the associations in this layer are related to emotions,
                you have high emotional responsiveness and sensitivity.</p>

            <SecondHeader>The fourth layer of associations: the root of the problem</SecondHeader>

            {printLevelItems(3)}

            <p className="mb-4">It is important to understand the reason why this image was predominantly formed.
                Perhaps it is a true desire or goal, or a subconscious fear, some internal conflict,
                sometimes an attitude or difficulty that annoys you, or a task that you cannot cope with.</p>

            <SecondHeader>The last layer of associations: the key word</SecondHeader>

            <p className="mb-4">The last layer is the key to understanding your feelings, thoughts and behavior regarding the subject
                of the request. So, here is this query-key pair:</p>

            <div className={"flex justify-center text-4xl mb-4"}>
                <Highlight>{issue.fact}</Highlight>&nbsp;&rarr;&nbsp;<Highlight>{getKey()}</Highlight>
            </div>

            <p className="mb-4">Look at them and try to understand the relationship between these concepts.
                You may discover something new or pay closer attention to something you already
                knew but avoided connecting with.</p>

            <p className="mb-4">By analyzing the test results, you can gain a broader understanding of ourselves, your thoughts,
                emotions and intuition. It will help you uncover hidden aspects of your personality, understand
                the reasons for your reactions and behavior, and find solutions to problems or challenges you face.</p>

            <p className="mb-4">Additionally, you can answer the following questions:</p>

            <p className="mb-4">- How does the key word make you feel?</p>

            <p className="mb-4">- What thoughts did you have when you saw the key word?</p>

            <p className="mb-4">- What did you want to do about this?</p>

            <div className="flex m-10 justify-center">
                <SecondaryButtonLink className={"mr-2"} to={"/test/schema"}>Schema</SecondaryButtonLink>
                <ButtonLink to={"/test/issue"}>Start again</ButtonLink>
            </div>
        </>
    )
};

export default Result