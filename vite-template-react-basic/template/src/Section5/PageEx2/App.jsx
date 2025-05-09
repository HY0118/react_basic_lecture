// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <header>
                <h1>My Website</h1>
                <nav>
                    <Link to="/">홈</Link> | {" "}
                    <Link to="/about">소개</Link> | {" "}
                    <Link to="/contact">연락처</Link>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
