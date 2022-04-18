import styles from "./ThemeToggle.module.css";
import { useContext } from "react";
import { LightMode } from "../../../themes/LightMode";
import { useTheme } from "../../../hooks/useTheme";
import { DarkMode } from "../../../themes/DarkMode";
import { ThemeContext } from "../../../context/context";

function ThemeToggle() {
	const { theme, setTheme } = useContext(ThemeContext);
	useTheme(theme);

	function toggleTheme() {
		theme === LightMode ? setTheme(DarkMode) : setTheme(LightMode);
	}

	return (
		<div className={styles.toggleWrapper}>
			<input
				type={"checkbox"}
				className={styles.toggle}
				onChange={toggleTheme}
			/>
			<span className={styles.iconWrapper}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="feather feather-sun">
					<circle cx="12" cy="12" r="5" />
					<line x1="12" y1="1" x2="12" y2="3" />
					<line x1="12" y1="21" x2="12" y2="23" />
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
					<line x1="1" y1="12" x2="3" y2="12" />
					<line x1="21" y1="12" x2="23" y2="12" />
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
				</svg>
				<svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 25 25">
					<title>Moon</title>
					<path
						id="Moon"
						d="M24.86,15.53a.5.5,0,0,0-.57,0A10.71,10.71,0,0,1,9.57.79.5.5,0,0,0,9,0,12.77,12.77,0,1,0,25,16,.5.5,0,0,0,24.86,15.53Z"
					/>
				</svg>
			</span>
		</div>
	);
}

export default ThemeToggle;
