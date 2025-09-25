import ThemeProvider from "./components/theme-provider";
import "./App.css";
import Intro from "./components/intro";
import Skills from "./components/skills";

function App() {
    return (
        <ThemeProvider>
            <header></header>
            <main>
                <Intro />
                <Skills />
            </main>
        </ThemeProvider>
    );
}

export default App;
