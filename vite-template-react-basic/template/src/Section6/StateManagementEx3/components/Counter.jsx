// components/Counter.jsx
import useCounterStore from "../stores/useCounterStore";

function Counter() {
    const { count, increase, decrease } = useCounterStore();

    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    );
}

export default Counter;
