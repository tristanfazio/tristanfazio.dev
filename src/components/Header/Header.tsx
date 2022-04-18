import styles from "./Header.module.css";
import { ThemeToggle } from "../Buttons/ThemeToggle";
import logo from "./images/logo.svg";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.logoWrapper}>
				<a href={"#landing"}>
					<img src={logo} alt={"logo"} />
				</a>
			</div>
			<div className={styles.buttonsWrapper}>
				<ul className={styles.navButtons}>
					<li>
						<a href={"#projects"} className={styles.navLink}>
							<span className={styles.navNumber}>1.</span>
							<span>Projects</span>
						</a>
					</li>
					<li>
						<a href={"#about"} className={styles.navLink}>
							<span className={styles.navNumber}>2.</span>
							<span>About</span>
						</a>
					</li>
					<li>
						<a href={"#contact"} className={styles.navLink}>
							<span className={styles.navNumber}>3.</span>
							<span>Contact</span>
						</a>
					</li>
				</ul>
				<ThemeToggle />
			</div>
		</div>
	);
};

export default Header;
