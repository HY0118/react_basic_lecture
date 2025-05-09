// Parent.jsx
import { useName } from "./NameContext";
import Child from "./Child";

function Parent() {
    const { name, setName } = useName();

    return (
        <div>
            <h1>부모 컴포넌트</h1>
            <button onClick={() => setName("React Master")}>이름 변경</button>
            <Child />
        </div>
    );
}

export default Parent;
