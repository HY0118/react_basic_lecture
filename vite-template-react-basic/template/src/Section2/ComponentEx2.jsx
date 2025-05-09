// React의 핵심, 컴포넌트로 나누고 재사용하기
// 함수형 컴포넌트 쉽게 이해하기

// 간단한 함수형 컴포넌트
function Greeting() {
    return <h1>안녕하세요, 반가워요!</h1>;
}

// 복잡한 예시
function WelcomeMessage() {
    const name = "CODEUCK";
    const message = "리액트 컴포넌트가 이렇게 간단할 줄이야!";

    return (
        <div>
            <h1>안녕하세요, {name}!</h1>
            <p>{message}</p>
        </div>
    );
}
