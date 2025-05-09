// 상태(State)와 이벤트 - 클릭하면 변하는 화면 만들기
// 이벤트(onClick, onChange)로 화면 바꾸기

// onClick - 버튼 클릭 이벤트
import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // 클릭할 때마다 **setCount**로 상태를 업데이트하여 화면이 다시 렌더링됩니다.
    setCount(count + 1);
  }

  return (
    <div>
      {/* onClick 속성에 함수 (handleClick)를 연결하여 버튼 클릭을 감지합니다. */}
      <button onClick={handleClick}>클릭!</button>
      <p>버튼을 {count}번 눌렀어요.</p>
    </div>
  );
}

// onChange - 입력 필드 이벤트
import { useState } from 'react';

function NameChanger() {
  const [name, setName] = useState("");

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

// 실습 : 버튼으로 배경색 바꾸기

import { useState } from 'react';

function BackgroundChanger() {
  // 배경색을 관리하는 상태
  const [bgColor, setBgColor] = useState("white");

  // 배경색을 바꾸는 함수
  function changeBackgroundColor() {
    // 삼항 연산자 (조건 ? 참일 때 값 : 거짓일 때 값)
    // 현재 배경색이 "white"이면 "lightblue"로, 그 외에는 "white"로 변경
    setBgColor(bgColor === "white" ? "lightblue" : "white");
  }

  return (
    <div style={{ backgroundColor: bgColor, padding: "20px" }}>
      <button onClick={changeBackgroundColor}>배경색 변경</button>
    </div>
  );
}
