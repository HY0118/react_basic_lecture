// components/Parent.jsx
import { useTheme } from "../contexts/ThemeContext";
import Child from "./Child";

function Parent() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`parent ${theme}`}>
            <h1>부모 컴포넌트</h1>
            <button onClick={toggleTheme}>
                테마 변경 (현재: {theme === "light" ? "라이트 모드" : "다크 모드"})
            </button>
            <Child />
        </div>
    );
}

export default Parent;
