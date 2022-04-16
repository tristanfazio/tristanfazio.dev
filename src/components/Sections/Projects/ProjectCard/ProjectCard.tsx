import styles from "./ProjectCard.module.css";
import eye from "./images/eye-solid.svg";
import code from "./images/code-solid.svg";

const ProjectCard = (props: {
	projectTitle?: string;
	imageUrl?: string;
	codeLink?: string;
	liveLink?: string;
	tags?: string[];
	description?: string;
}) => {
	return (
		<div className={styles.projectCard}>
			<img
				className={styles.projectImage}
				src={props.imageUrl}
				alt={"image"}
			/>
			<div className={styles.projectDetails}>
				<h2 className={styles.projectTitle}>{props.projectTitle}</h2>
				<div className={styles.tags}>
					{props.tags?.map((tag) => (
						<Tag tag={tag} />
					))}
				</div>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.buttonsWrapper}>
					<button
						className={styles.button}
						onClick={() => {
							window.open(props.liveLink, "_blank");
						}}>
						<img className={styles.icon} alt={"Demo"} src={eye} />
						<p>Live Demo</p>
					</button>
					<button
						className={styles.button}
						onClick={() => {
							window.open(props.codeLink, "_blank");
						}}>
						<img className={styles.icon} alt={"Code"} src={code} />
						<p>View Code</p>
					</button>
				</div>
			</div>
		</div>
	);
};

const Tag = (props: { tag: string }) => {
	return <p className={styles.tag}>{props.tag}</p>;
};

export default ProjectCard;
