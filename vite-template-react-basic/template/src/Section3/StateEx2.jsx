// 상태(State)와 이벤트 - 클릭하면 변하는 화면 만들기
// useState로 상태 관리해보기

// 기초
import { useState } from 'react';

function Counter() {
    // 상태 선언 -> const [상태, 상태변경함수] = useState(초기값);
    // 초기 상태 값을 설정합니다. (예: 0)
    // 배열을 반환하며 첫 번째 값(count)은 현재 상태, 두 번째 값(setCount)은 상태를 변경하는 함수입니다.
    const [count, setCount] = useState(0);

    // 상태 변경 함수
    function increase() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    );
}

// 실습: 이름 입력하기
import { useState } from 'react';

function NameInput() {
    // 이름을 상태로 관리
    const [name, setName] = useState("");

    // 입력된 값으로 상태를 업데이트하는 함수
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
