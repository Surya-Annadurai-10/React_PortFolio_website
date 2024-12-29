import styles from './Skills.module.css'

const Skills = () =>{
    return (
        <>
        <div className={styles.skills_container}>
            <h1 className={styles.skills_head}>Skills</h1>
            <div className={styles.logo}>
                <div className={styles.html}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.20JLuG7lkfJTkKaUGPhRWAHaEo&pid=Api&P=0&h=180" alt="" />
                   
                </div>
                <div className={styles.css}>
                    <img src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-opencode-css-8.png" alt="" />
                    <h2>CSS 3</h2>
                </div>
                <div className={styles.js}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.J9gQcBZf5p2m8TEWQ42oigHaHa&pid=Api&P=0&h=180" alt="" />
                    <h2>Javascript</h2>
                </div>
                <div className={styles.react}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.EIeUGhoJAukC0NUWSc8BbAHaEL&pid=Api&P=0&h=180" alt="" />
                    <h2>React</h2>
                </div>
                <div className={styles.github}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.5F69UljXc5LLeM63sxM-6wHaHa&pid=Api&P=0&h=180" alt="" />
                    <h2>GitHub</h2>
                </div>
                <div className={styles.tools}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.qdSP64cjgExVDMXwwu0TmwHaFj&pid=Api&P=0&h=180" alt="" />
                    <h2>Git</h2>
                </div>
                <div className={styles.Tail}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.22tPt9bi1FRyjOYQI8irPQHaD4&pid=Api&P=0&h=180" alt="" />
                    <h2>Tailwind Css</h2>
                </div>

            </div>
        </div>
        </>
    )
}

export default Skills