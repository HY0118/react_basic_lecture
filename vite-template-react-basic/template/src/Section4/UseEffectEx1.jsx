// useEffect 이해하기: 자동으로 실행되는 기능 만들기
// 1. useEffect Hook 이해하기

// 기초
import { useState, useEffect } from 'react';

function WelcomeMessage() {
    const [name, setName] = useState("React");

    // useEffect 기본 구조
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타났어요!");
    }, []); // 빈 배열 = 최초 렌더링 시 한 번만 실행

    function changeName() {
        setName("React Master");
    }

    return (
        <div>
            <h1>안녕하세요, {name}님!</h1>
            <button onClick={changeName}>이름 변경하기</button>
        </div>
    );
}

// 응용 : 의존성 배열의 동작 이해하기
import { useState, useEffect } from 'react';

function NameLogger() {
    const [name, setName] = useState("");

    // name이 변경될 때마다 실행
    useEffect(() => {
        console.log(`이름이 ${name}으로 변경되었습니다.`);
    }, [name]); // name 변수를 감시하도록 설정

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="이름을 입력하세요"
                value={name}
                onChange={handleChange}
            />
            <h1>안녕하세요, {name}님!</h1>
        </div>
    );
}

// 실습: 페이지 제목 바꾸기
import { useState, useEffect } from 'react';

function TitleChanger() {
    const [title, setTitle] = useState("Welcome!");

    // 페이지 제목 변경
    useEffect(() => {
        document.title = title;
    }, [title]);

    function handleChange(event) {
        setTitle(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="페이지 제목을 입력하세요"
                value={title}
                onChange={handleChange}
            />
            <h1>현재 제목: {title}</h1>
        </div>
    );
}
