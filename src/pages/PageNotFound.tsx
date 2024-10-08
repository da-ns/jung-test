import {useTranslation} from "react-i18next";

const PageNotFound = () => {
    const { t } = useTranslation();

    const m = {
        message: t("page-not-found.message")
    };

    return(
        <div className="h-full flex flex-col justify-center items-center">
            <div className="text-8xl">404</div>
            <div className="text-lg uppercase">{m.message}</div>
        </div>
    );
}

export default PageNotFound