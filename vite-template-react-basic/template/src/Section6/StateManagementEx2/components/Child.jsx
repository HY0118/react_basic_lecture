// components/Child.jsx
import { useTheme } from "../contexts/ThemeContext";

function Child() {
    const { theme } = useTheme();

    return (
        <div className={`child ${theme}`}>
            <h2>자식 컴포넌트</h2>
            <p>현재 테마: {theme === "light" ? "라이트 모드" : "다크 모드"}</p>
        </div>
    );
}

export default Child;
