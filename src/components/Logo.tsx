import {useTranslation} from "react-i18next";

type LogoProps = {
    size?: number;
    className?: string;
}

const Logo = ({size = 64, className} : LogoProps) => {
    const { t } = useTranslation();

    const m = {
        alt: t("logo.alt")
    };

    return (
        <img src="/logo.png" height={size} width={size} alt={m.alt} className={className}/>
    )
}

export default Logo