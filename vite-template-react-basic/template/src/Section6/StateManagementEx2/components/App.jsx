// components/App.jsx
import { ThemeProvider } from "../contexts/ThemeContext";
import Parent from "./Parent";
import "../styles/App.css";

function App() {
    return (
        <ThemeProvider>
            <Parent />
        </ThemeProvider>
    );
}

export default App;
