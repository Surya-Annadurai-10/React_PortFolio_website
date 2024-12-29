import styles from './Header.module.css'

const Header = () =>{
    return (
        <>
        <header className={styles.head_con}>
            <div className={styles.left}>
                 <a href='' className={styles.header}>Portfolio.</a>
            </div>
            <div className={styles.right}>
                 <a className={styles.home} href="">Home</a>
                 <a className={styles.about} href="">About</a>
                 <a className={styles.skills} href="">Skills</a>
                 <a className={styles.projects} href="">Projects</a>
                 <a className={styles.contact} href="">Contact</a>
             </div>
        </header>
        </>
    )
}

export default Header;