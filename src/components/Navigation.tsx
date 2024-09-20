import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul className="flex justify-center items-center">
                <li className="m-4">
                    <Link to="/">About</Link>
                </li>
                <li className="m-4">
                    <Link to="/test">Start test</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation