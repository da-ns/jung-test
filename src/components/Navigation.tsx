import {Link} from "react-router-dom";
import ButtonLink from "./ButtonLink.tsx";
import {useTranslation} from "react-i18next";
import parse from "html-react-parser";

const Navigation = () => {
    const { t } = useTranslation();

    const m = {
        home: t("navigation.home"),
        about: parse(t("navigation.about")),
        run: parse(t("navigation.run")),
    };

    return (
        <nav>
            <ul className="flex flex-wrap justify-center items-center">
                <li className="m-4">
                    <Link to="/">{m.home}</Link>
                </li>
                <li className="m-4">
                    <Link to="/about">{m.about}</Link>
                </li>
                <li className="m-4">
                    <ButtonLink to="/test">{m.run}</ButtonLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation