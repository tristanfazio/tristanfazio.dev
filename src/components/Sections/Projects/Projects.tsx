import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import terminalType from "./images/terminalType.png";

const Projects = () => {
	return (
		<div id={"projects"} className={styles.projects}>
			<h1>
				<span className={styles.flare}>1.</span> Projects
			</h1>
			<div className={styles.projectsListWrapper}>
				<ProjectCard
					projectTitle={"Terminal Type"}
					imageUrl={terminalType}
					codeLink={
						"https://github.com/tristanfazio/typeracer-react-nodejs"
					}
					liveLink={"https://typeracer-clone-client.fazio.dev"}
					tags={["Typescript", "React", "Redux", "S3"]}
					description={
						"Practice your typing accuracy, improve your words per minute, and race your friends in Terminal Type!" +
						"\n\n A TypeRacer clone, with my own stylized spin. Aiming to improve on the idea by making it multiplayer over websockets." +
						"\n\n Client is stored in S3 and served via CloudFront. Quote API and multiplayer websockets are a WIP."
					}
				/>
			</div>
		</div>
	);
};

export default Projects;
