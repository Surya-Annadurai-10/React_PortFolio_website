import styles from './Header.module.css'

const Header = () =>{
    return (
        <>
        <header  className={styles.head_con}>
            <div className={styles.left}>
                 <a href='' className={styles.header}>Portfolio.</a>
            </div>
            <div className={styles.right}>
                 <a className={styles.home} href="#">Home</a>
                 <a className={styles.about} href="#2">About</a>
                 <a className={styles.skills} href="#3">Skills</a>
                 <a className={styles.projects} href="#4">Projects</a>
                 <a className={styles.contact} href="#5">Contact</a>
             </div>
        </header>
        </>
    )
}

export default Header;