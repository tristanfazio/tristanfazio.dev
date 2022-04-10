import "./App.css";
import { Header } from "./components/Header";
import { LightMode } from "./themes/LightMode";
import { useTheme } from "./hooks/useTheme";
import { Landing } from "./components/Landing";
import { useState } from "react";
import { ThemeContext } from "./context/context";

function App() {
	const [theme, setTheme] = useState(LightMode);
	useTheme(theme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className="App">
				<Header />
				<Landing />
				{/*<Projects/>*/}
				{/*<Skills/>*/}
				{/*<About/>*/}
				{/*<Contact/>*/}
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
