import "./../i18n";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const m = {
        ru: t("language-selector.ru"),
        en: t("language-selector.en")
    };

    const changeLanguage = (lng : any) => {
        i18n
            .changeLanguage(lng)
            .then(() => {});
    };

    return (
        <div className="mt-3 flex gap-3 text-xs text-center text-[#8d96a7]">
            <button type="button" onClick={() => changeLanguage("ru")}>
                {m.ru}
            </button>
            {" | "}
            <button type="button" onClick={() => changeLanguage("en")}>
                {m.en}
            </button>
        </div>
    );
};

export default LanguageSelector;