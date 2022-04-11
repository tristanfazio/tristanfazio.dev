import styles from "./ProjectsButton.module.css";
import downArrow from "../../Sections/Landing/images/downarrrow.svg";
import { CSSProperties, useContext } from "react";
import { ThemeContext } from "../../../context/context";
import { LightMode } from "../../../themes/LightMode";

const ProjectsButton = () => {
	const { theme } = useContext(ThemeContext);

	const style: CSSProperties =
		theme === LightMode
			? { outlineColor: "var(--primary-green)" }
			: {
					backgroundColor: "var(--primary-green)",
					outlineColor: "var(--primary-green)",
			  };

	return (
		<div className={`${styles.projectsButton}`} style={style}>
			Projects
			<img src={downArrow} alt={"icon"} height={8} width={16} />
		</div>
	);
};

export default ProjectsButton;
