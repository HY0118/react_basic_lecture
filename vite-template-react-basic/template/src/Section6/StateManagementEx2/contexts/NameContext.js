// contexts/NameContext.js
import { createContext, useContext, useState } from "react";

// 전역 상태 생성
const NameContext = createContext();

export function NameProvider({ children }) {
    const [name, setName] = useState("CODEUCK");

    return (
        <NameContext.Provider value={{ name, setName }}>
            {children}
        </NameContext.Provider>
    );
}

export function useName() {
    return useContext(NameContext);
}
