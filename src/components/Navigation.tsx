import {Link} from "react-router-dom";
import ButtonLink from "./ButtonLink.tsx";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex justify-center items-center">
                <li className="m-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="m-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="m-4">
                    <ButtonLink to="/test">Run test</ButtonLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation