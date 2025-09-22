import ThemeProvider from './components/theme-provider'
import './App.css'
import Intro from './components/intro'

function App() {
    return (
        <ThemeProvider>
            <main>
                <Intro />
            </main>
        </ThemeProvider>
    )
}

export default App
