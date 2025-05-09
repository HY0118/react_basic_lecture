// 상태 관리 레벨업 : 어디서든 데이터 가져오기
// 전역 상태가 뭐야? 왜 필요할까?

// 상태(State) 복습
// 간단한 상태 예시
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={increase}>+1</button>
        </div>
    );
}

// 전역 상태가 없을 때의 문제점

import { useState } from "react";
function Parent() {
    const [name, setName] = useState("CODEUCK");

    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <Child name={name} />
        </div>
    );
}

function Child({ name }) {
    return (
        <div>
            <h2>자식 컴포넌트</h2>
            <p>이름: {name}</p>
        </div>
    );
}