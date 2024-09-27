import { Outlet } from "react-router-dom";
import {IssueProvider} from "../context/IssueContext";

const Test = () => {
    return(
        <div className="max-w-prose h-full flex flex-col justify-center">
            <IssueProvider>
                <Outlet/>
            </IssueProvider>
        </div>
    );
}

export default Test
