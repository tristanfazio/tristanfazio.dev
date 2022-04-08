import './App.css'
import {Header} from "./components/Header";
import {LightMode} from "./themes/LightMode";
import {useTheme} from "./hooks/useTheme";

function App() {
    useTheme(LightMode)

    return (
        <div className="App">
            <Header/>
            <p>Hello! my name is</p>
            <h1>Tristan Fazio</h1>
            <p>Full Stack Software Engineer </p>
        </div>
    )
}

export default App
