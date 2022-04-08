import styles from "./Header.module.css"
import {ThemeToggle} from "../Buttons/ThemeToggle";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <image>logo</image>
            </div>
            <div className={styles.buttonsWrapper}>
                <ul className={styles.navButtons}>
                    <li>
                        <span className={styles.navNumber}>1.</span><span>Projects</span>
                    </li>
                    <li>
                        <span className={styles.navNumber}>2.</span><span>Skills</span>
                    </li>
                    <li>
                        <span className={styles.navNumber}>3.</span><span>About</span>
                    </li>
                    <li>
                        <span className={styles.navNumber}>4.</span><span>Contact</span>
                    </li>
                </ul>
                <ThemeToggle/>
            </div>
        </div>
    )
}

export default Header