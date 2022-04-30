import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<div id={"contact"} className={styles.contact}>
			<h1>
				<span className={styles.flare}>3.</span> Contact
			</h1>
			<div className={styles.sectionWrapper}>
				<div className={styles.content}>
					<p>No one likes forms.</p>
					<p>
						If you like what you see, drop me an email or add me on
						LinkedIn, I'm always happy to chat.
					</p>
				</div>
				<div className={styles.buttonWrapper}>
					<div
						className={`${styles.button}`}
						onClick={() =>
							window.open(
								"mailto:tristan@fazio.dev?subject=Found your portfolio - Let's connect!",
								"_blank",
							)
						}>
						<p>Let's Connect</p>
						<div className={styles.imageWrapper}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512">
								<path d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
							</svg>
						</div>
					</div>
				</div>
				<p>Thanks for stopping by!</p>
			</div>
		</div>
	);
};

export default Contact;
