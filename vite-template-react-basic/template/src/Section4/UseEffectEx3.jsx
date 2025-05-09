// useEffect 이해하기: 자동으로 실행되는 기능 만들기
// 3. 간단한 비동기 처리 살짝 맛만볼까? (setTimeout 등)

// 기초
import { useState, useEffect } from 'react';

function Message() {
  const [message, setMessage] = useState("안녕하세요!");

  useEffect(() => {
    // setTimeout은 지정한 시간 후에 한 번만 실행되는 타이머
    // 3초 후에 메시지 변경
    setTimeout(() => {
      setMessage("리액트 재미있어요!");
    }, 3000);
  }, []); // 처음 렌더링될 때 한 번만 실행

  return <h1>{message}</h1>;
}

// 응용: setInterval로 반복 작업하기
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // setInterval은 일정 간격으로 반복 작업을 수행할 때 사용
    // 1초마다 카운트 증가
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // 정리 함수 (cleanup) - 메모리 누수를 방지
    return () => clearInterval(interval);
  }, []); // 처음 렌더링될 때 한 번만 설정

  return <h1>경과 시간: {seconds}초</h1>;
}

// 실습: 로딩 메세지 보여주기
import { useState, useEffect } from 'react';

function LoadingMessage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2초 후에 로딩 완료
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // 정리 함수
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <h1>로딩 중...</h1> : <h1>로딩 완료!</h1>}
    </div>
  );
}
