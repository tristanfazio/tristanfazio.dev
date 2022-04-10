import styles from "../../Landing/Landing.module.css";
import github from "../../Landing/images/github.svg";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/context";
import { LightMode } from "../../../themes/LightMode";
import { DarkMode } from "../../../themes/DarkMode";

function SquareButton(props: {
	onClick: () => void;
	icon: string;
	colour: string;
}) {
	const { theme } = useContext(ThemeContext);
	useEffect(() => {
		console.log(`theme changed to ${theme.var}`)
	}, [theme]);
	return (
		<>
			{theme === LightMode && (
				<div
					id="LightButton"
					className={`${styles.lightButton}`}
					onClick={props.onClick}
					style={{ backgroundColor: "transparent" }}>
					<img
						className={`${styles.icon}`}
						src={github}
						alt={"github"}
					/>
				</div>
			)}
			{theme === DarkMode && (
				<div
					id="DarkButton"
					className={`${styles.darkButton}`}
					onClick={props.onClick}
					style={{ backgroundColor: "var(--secondary-purple" }}>
					<img
						className={`${styles.icon}`}
						src={github}
						alt={"github"}
					/>
				</div>
			)}
		</>
	);
}

export default SquareButton;
