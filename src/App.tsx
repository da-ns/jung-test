import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./pages/About";
import Test from "./pages/Test";

const App = () => {
    return (
        <Router>
            <div className="h-full flex flex-col items-center">
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

                <div className="flex-grow">
                    <Routes>
                        <Route path="/" element={
                            <About />
                        }/>

                        <Route path="/test" element={
                            <Test />
                        } />
                    </Routes>
                </div>

                <footer className="pb-10 text-xs">
                    &copy;&nbsp;da-ns.ru
                </footer>
            </div>
        </Router>
    );
}

export default App