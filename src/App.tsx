import {Outlet} from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <div className="h-full flex flex-col items-center">
            <Navigation/>

            <div className="flex-grow mt-10">
                <Outlet />
            </div>

            <footer className="pb-10 text-xs">
                &copy;&nbsp;da-ns.ru
            </footer>
        </div>
    );
}

export default App