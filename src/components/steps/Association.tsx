import TextInput from "../TextInput";
import useIssue from "../../context/IssueContext";
import {ChangeEvent, useEffect, useMemo, useState} from "react";
import Button from "../Button.tsx";
import {useNavigate} from "react-router-dom";
import {IssueContextType} from "../../@types/IssueContextType";
import {IAssociation} from "../../@types/IAssociation";
import {useTranslation} from "react-i18next";
import {useInterval} from 'usehooks-ts';

const Association = () => {
    const ASSOCIATIONS_COUNT = 31;
    const FIRST_LEVEL_ASSOCIATIONS_COUNT = 16;

    const [ index, setIndex ] = useState<number>(0);
    const [ task, setTask ] = useState<string>("");
    const [ word, setWord ] = useState("");
    const { issue, setAssociation }: IssueContextType = useIssue();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [time, setTime] = useState<number>(0);
    const [playing, setPlaying] = useState<boolean>(false);

    const m = {
        numberSymbol: t("test.association.numberSymbol"),
        hint: t("test.association.hint"),
        next: t("test.association.next"),
    };

    useInterval(
        () => {
            setTime(time + 100);
            console.log("time");
        },

        playing ? 100 : null,
    )

    const handleChangeWord = (event: ChangeEvent<HTMLInputElement>) : void => {
        setWord((event.target as HTMLInputElement).value);
    };

    const handleClickNext = () : void => {
        setPlaying(false);

        if (index === null) {
            console.error("Current association index is null.");
            return;
        }

        if (word !== "") {
            setAssociation(word, index, calculateLevel(index), time);
        }
    };

    const handleEnter = () : void => {
        handleClickNext();
    };

    useEffect(() => {
        updateIndex();
        setWord("");
    }, [issue]);

    useEffect(() => {
        setTime(0);
        setPlaying(true);
    }, [index]);

    useEffect(() => {
        updateIndex();
        // setPlaying(true);
    }, []);

    const findFreeIndex = (): number | null => {
        const nextFreeIndex: number = issue
            .associatoins
            .filter((item) => item !== null)
            .length;

        if (nextFreeIndex < ASSOCIATIONS_COUNT) {
            return nextFreeIndex;
        }

        return null;
    };

    const calculateLevel = (index: number): number => {
        if (index >= 0 && index <= 15) return 0;
        if (index >= 16 && index <= 23) return 1;
        if (index >= 24 && index <= 27) return 2;
        if (index >= 28 && index <= 29) return 3;
        if (index == 30) return 4;

        throw Error("Index value = " + index + " is not allowed.")
    };

    const updateIndex = () => {
        if (issue.fact == null) {
            navigate("/test/issue");
            return;
        }

        const freeIndex = findFreeIndex();

        if (freeIndex == null) {
            navigate("/test/result");
            return;
        }

        setIndex(freeIndex);

        if (freeIndex < 16) {
            setTask(issue.fact);
        } else {
            const level: number = calculateLevel(freeIndex);

            const beforeLevelItems: IAssociation[] = issue
                .associatoins
                .filter((item: IAssociation) => item && item.level == (level - 1));


            const currentLevelLength: number = issue
                .associatoins
                .filter((item: IAssociation) => item && item.level == level)
                .length;

            const newTask: string = beforeLevelItems[2 * currentLevelLength].word + " " +
                beforeLevelItems[2 * currentLevelLength + 1].word;

            setTask(newTask);
        }
    };

    const associationNumber = useMemo(() => {
            return index < FIRST_LEVEL_ASSOCIATIONS_COUNT ? m.numberSymbol + (index + 1) : "";
        }, [index]);

    return (
        <div>
            <div className="flex justify-center">
                <img src="../timer.gif" alt="" width="100" height="auto"/>
            </div>

            <div className="text-xl text-center mb-4">
                {t("test.association.message", {associationNumber: associationNumber})}
            </div>

            <div className="text-3xl text-center text-indigo-500 mb-6 lowercase">{task}</div>

            <TextInput
                value={word}
                autofocus={true}
                onChange={handleChangeWord}
                onEnter={handleEnter}
                placeholder={m.hint}/>

            <div className="flex m-10 justify-center">
                <Button onClick={handleClickNext}>{m.next}</Button>
            </div>
        </div>
    )
}

export default Association