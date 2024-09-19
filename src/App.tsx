import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Test from "./pages/Test";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/test">Start test</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={
                        <About />
                    }/>

                    <Route path="/test" element={
                        <Test />
                    } />
                </Routes>
            </div>
        </Router>
    );
}