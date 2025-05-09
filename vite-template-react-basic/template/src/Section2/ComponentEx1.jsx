// React의 핵심, 컴포넌트로 나누고 재사용하기
// 컴포넌트(Component)란?

function Header() {
    return <h1>Welcome!</h1>;
}

function Footer() {
    return <p>© 2025 CODEUCK</p>;
}

function App() {
    return (
        <div>
            <Header />
            <p>내용입니다.</p>
            <Footer />
        </div>
    );
}
