import {Outlet} from "react-router-dom";

const Test = () => {
    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <Outlet/>
        </div>
    );
}

export default Test