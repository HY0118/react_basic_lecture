// useEffect 이해하기: 자동으로 실행되는 기능 만들기
// 2. 컴포넌트가 바뀔 때마다 자동으로 실행하는 기능 만들기

// 기초
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // 상태가 변경될 때마다 실행
  useEffect(() => {
    console.log(`카운트가 ${count}로 변경되었습니다.`);
  }, [count]);

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

// 응용: 여러 상태를 감시
import { useState, useEffect } from 'react';

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // 이름이나 나이가 변경될 때마다 실행
  useEffect(() => {
    console.log(`이름: ${name}, 나이: ${age}`);
  }, [name, age]);

  return (
    <div>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="나이를 입력하세요"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <h2>이름: {name}</h2>
      <h2>나이: {age}</h2>
    </div>
  );
}

// 실습: 의존성 배열의 다양한 활용
// 1. 빈 배열 ([]) - 처음 렌더링 시 한 번만 실행
import { useEffect, useState } from 'react';

function InitialOnly() {
  const [name, setName] = useState("");

  // 최초 렌더링 시 한 번만 실행
  useEffect(() => {
    console.log("컴포넌트가 처음 렌더링되었습니다!");

    return () => {
      console.log("컴포넌트가 사라졌습니다!");
    };
  }, []); // 빈 배열은 컴포넌트가 처음 나타날 때 딱 한 번만 실행되므로, 이후 상태가 변경되어도 다시 실행되지 않음.

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

// 2. 특정 상태를 감시 ([name]) - 상태가 변경될 때마다 실행
import { useEffect, useState } from 'react';

function NameWatcher() {
  const [name, setName] = useState("");

  // name이 변경될 때마다 실행
  useEffect(() => {
    console.log(`이름이 ${name}으로 변경되었습니다.`);
  }, [name]); // 의존성 배열에 **[name]**을 넣으면 name 상태가 변경될 때마다 다시 실행

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

// 3. 의존성 배열 없이 - 매 렌더링마다 실행
import { useEffect, useState } from 'react';

function EveryRender() {
  const [name, setName] = useState("");

  // 매 렌더링 시마다 실행
  useEffect(() => {
    console.log("컴포넌트가 렌더링되었습니다!");
  }); // 매번 렌더링될 때마다 실행되므로, 입력할 때마다 매번 콘솔 로그가 출력

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
