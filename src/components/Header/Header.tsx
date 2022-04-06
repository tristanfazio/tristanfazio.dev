import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <image>logo</image>
            </div>
            <div className={styles.buttonsWrapper}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Header