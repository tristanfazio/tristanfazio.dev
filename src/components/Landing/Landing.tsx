import styles from "./Landing.module.css";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import email from "./images/email.svg";
import cv from "./images/cv.svg";
import { IconButton } from "../Buttons/IconButton";
import { ProjectsButton } from "../Buttons/ProjectsButton";

const Landing = () => {
	return (
		<div className={styles.landing}>
			<p className={styles.greeting}>
				<span className={styles.flare}>Hello!</span> my name is
			</p>
			<h1 className={styles.name}>Tristan Fazio</h1>
			<p className={styles.description}>Full Stack Software Engineer </p>
			<div className={styles.linksWrapper}>
				<IconButton
					onClick={() =>
						window.open(
							"https://github.com/tristanfazio/",
							"_blank",
						)
					}
					icon={github}
					colour={"var(--secondary-purple)"}
					iconWidth={32}
					iconHeight={32}
				/>
				<IconButton
					onClick={() =>
						window.open(
							"https://linkedin.com/in/tristanfazio",
							"_blank",
						)
					}
					icon={linkedin}
					colour={"var(--cool-blue)"}
					iconWidth={32}
					iconHeight={32}
				/>
				<IconButton
					onClick={() =>
						window.open(
							"mailto:tristan@fazio.dev?subject=Found your portfolio - Let's connect!",
							"_blank",
						)
					}
					icon={email}
					colour={"var(--error-orange)"}
					iconWidth={32}
					iconHeight={32}
				/>
				<IconButton
					onClick={() =>
						window.open("http://www.google.com", "_blank")
					}
					icon={cv}
					colour={"var(--alert-red)"}
					iconWidth={32}
					iconHeight={32}
				/>
			</div>
			<a href={"#projects"}>
				<ProjectsButton />
			</a>
		</div>
	);
};

export default Landing;
