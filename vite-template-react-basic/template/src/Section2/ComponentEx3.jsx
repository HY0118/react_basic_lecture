// React의 핵심, 컴포넌트로 나누고 재사용하기
// Props로 데이터 전달하기

// 기초: props 사용하기
// 자식 컴포넌트
function Greeting(props) {
    return <h1>안녕하세요, {props.name}님!</h1>;
}

// 부모 컴포넌트
function App() {
    return <Greeting name="CODEUCK" />;
}

// 응용: 여러개의 props 사용하기
function Profile(props) {
    return (
        <div>
            <h2>이름: {props.name}</h2>
            <p>직업: {props.job}</p>
        </div>
    );
}

function App() {
    return <Profile name="CODEUCK" job="프론트엔드 개발자" />;
}

// 심화: 객체로 props 전달하기
function Profile({ name, job }) {
    return (
        <div>
            <h2>이름: {name}</h2>
            <p>직업: {job}</p>
        </div>
    );
}

function App() {
    return <Profile name="CODEUCK" job="프론트엔드 개발자" />;
}

// 실습: 자기소개 카드 만들기
function IntroCard({ name, age, hobby }) {
    return (
        <div>
            <h2>이름: {name}</h2>
            <p>나이: {age}</p>
            <p>취미: {hobby}</p>
        </div>
    );
}

function App() {
    return <IntroCard name="CODEUCK" age="29" hobby="코딩" />;
}

