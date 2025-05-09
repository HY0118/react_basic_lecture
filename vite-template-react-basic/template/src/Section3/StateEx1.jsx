// 상태(State)와 이벤트 - 클릭하면 변하는 화면 만들기
// 상태(State)라는 건 왜 필요할까?

// 상태 없이 변수로만 관리한 경우
// React는 상태가 변경될 때만 화면을 다시 그리는 특징이 있기 때문에, 단순 변수는 감지되지 않습니다.
let count = 0;

function CounterWithoutState() {
    function increase() {
        count += 1;
        // 버튼을 클릭할 때마다 콘솔에는 숫자가 올라가지만, 화면에는 변동이 없습니다.
        console.log(count);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Click me!</button>
        </div>
    );
}

// 상태를 사용한 경우
import { useState } from 'react';

function CounterWithState() {
    const [count, setCount] = useState(0);

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

