import ButtonLink from "../components/ButtonLink.tsx";
import HorizontalLine from "../components/HorizontalLine.tsx";
import Header from "../components/Header.tsx";
import {useTranslation} from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    const m = {
        run: t("navigation.run"),
        title: t("about.title"),
        text0: t("about.text[0]"),
        text1: t("about.text[1]"),
        text2: t("about.text[2]"),
        text3: t("about.text[3]"),
        text4: t("about.text[4]"),
    };

    return(
        <div className="max-w-prose">
            <Header>{m.title}</Header>

            <HorizontalLine />

            <p className="mb-4">{m.text0}</p>
            <p className="mb-4">{m.text1}</p>
            <p className="mb-4">{m.text2}</p>
            <p className="mb-4">{m.text3}</p>
            <p className="mb-4">{m.text4}</p>

            <div className="flex m-10 justify-center">
                <ButtonLink to="/test">{m.run}</ButtonLink>
            </div>
        </div>
    );
}

export default About