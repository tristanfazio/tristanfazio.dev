import styles from "./Landing.module.css";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import email from "./images/email.svg";
import cv from "./images/cv.svg";
import { SquareButton } from "../Buttons/SquareButton";

const Landing = () => {
	return (
		<div className={styles.landing}>
			<p className={styles.greeting}>
				<span className={styles.flare}>Hello!</span> my name is
			</p>
			<h1 className={styles.name}>Tristan Fazio</h1>
			<p className={styles.description}>Full Stack Software Engineer </p>
			<div className={styles.linksWrapper}>
				<SquareButton
					onClick={() =>
						window.open("http://www.google.com", "_blank")
					}
					icon={github}
					colour={"var(--secondary-purple)"}
				/>
			</div>
		</div>
	);
};

export default Landing;
