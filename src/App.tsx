import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo.tsx";
import LanguageSelector from "./components/LanguageSelector.tsx";

const App = () => {
    return (
        <div className="h-full flex flex-col items-center">
            <Logo size={32} className="m-4"/>

            <Navigation/>

            <LanguageSelector />

            <div className="flex-grow mt-10">
                <Outlet />
            </div>

            <footer className="pb-10 text-xs">
                <Logo size={16} className="inline mr-1 mb-1 align-middle"/>&copy;&nbsp;da-ns.ru
            </footer>
        </div>
    );
}

export default App