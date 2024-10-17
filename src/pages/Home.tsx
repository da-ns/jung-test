import ButtonLink from "../components/ButtonLink.tsx";
import HorizontalLine from "../components/HorizontalLine.tsx";
import Header from "../components/Header.tsx";
import "./../i18n.ts";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const Home = () => {
    const { t } = useTranslation();

    const m = {
        title: parse(t("home.title")),
        subtitle: parse(t("home.subtitle")),
        run: parse(t("navigation.run")),
    };

    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <div className="text-5xl text-center break-words">{m.title}</div>
            <HorizontalLine />
            <Header>{m.subtitle}</Header>

            <div className="flex m-10 justify-center">
                <ButtonLink to="/test">
                    {m.run}
                </ButtonLink>
            </div>


        </div>
    );
}

export default Home