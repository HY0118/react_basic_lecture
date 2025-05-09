// 여러 페이지로 구성된 앱 만들기
// 1. SPA(싱글 페이지 앱)와 라우팅은 뭘까?

// 기초
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
    return <h1>홈 페이지</h1>;
}

function About() {
    return <h1>소개 페이지</h1>;
}

function Contact() {
    return <h1>연락처 페이지</h1>;
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">홈</Link>
                <Link to="/about">소개</Link>
                <Link to="/contact">연락처</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}