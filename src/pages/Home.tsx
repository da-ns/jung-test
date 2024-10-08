import ButtonLink from "../components/ButtonLink.tsx";
import HorizontalLine from "../components/HorizontalLine.tsx";
import Header from "../components/Header.tsx";
import "./../i18n.ts";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    const m = {
        title: t("home.title"),
        subtitle: t("home.subtitle"),
        run: t("navigation.run"),
    };

    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <div className="text-5xl">{m.title}</div>
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