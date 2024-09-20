type LogoProps = {
    size?: number;
    className?: string;
}

const Logo = ({size = 64, className} : LogoProps) => {
    return (
        <img src="/logo.png" height={size} width={size} alt="Logo" className={className}/>
    )
}

export default Logo