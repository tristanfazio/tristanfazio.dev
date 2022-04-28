import styles from "./App.module.css";
import { Header } from "./components/Header";
import { LightMode } from "./themes/LightMode";
import { useTheme } from "./hooks/useTheme";
import { Landing } from "./components/Sections/Landing";
import { useState } from "react";
import { ThemeContext } from "./context/context";
import { Projects } from "./components/Sections/Projects";
import { About } from "./components/Sections/About";
import Contact from "./components/Sections/Contact/Contact";

function App() {
	const [theme, setTheme] = useState(LightMode);
	useTheme(theme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div className={styles.app}>
				<div className={styles.bodyWrapper}>
					<Landing />
					<Projects />
					<About />
					<Contact />
				</div>
				<Header />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
