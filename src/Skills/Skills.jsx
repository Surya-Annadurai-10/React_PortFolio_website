import styles from './Skills.module.css'

const Skills = () =>{
    return (
        <>
        <div id='3' className={styles.skills_container}>
            <a href='' className={styles.skills_head}>Skills</a>
            <div className={styles.logo}>
                <div >
                   <div className={styles.html}>
                   <img src="https://tse2.mm.bing.net/th?id=OIP.N_anztpFCPTBVRUMWvuGBwHaHa&pid=Api&P=0&h=180" alt="" />
                   </div>
                   <h2>Html 5</h2>
                </div>
                <div >
                    <div className={styles.css}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.mx3AsYSAbOVTmrbsKgwf-gHaGZ&pid=Api&P=0&h=180" alt="" />
                    </div>
                    <h2>CSS 3</h2>
                </div>
                <div >
                    <div className={styles.js}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.J9gQcBZf5p2m8TEWQ42oigHaHa&pid=Api&P=0&h=180" alt="" />

                    </div>
                    <h2>Javascript</h2>
                </div>
                <div >
                    <div className={styles.react}>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.EIeUGhoJAukC0NUWSc8BbAHaEL&pid=Api&P=0&h=180" alt="" />

                    </div>
                    <h2>React</h2>
                </div>
                <div >
                     <div className={styles.github}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.5F69UljXc5LLeM63sxM-6wHaHa&pid=Api&P=0&h=180" alt="" />

                     </div>
                    <h2>GitHub</h2>
                </div>
                <div >
                     <div className={styles.git}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.qdSP64cjgExVDMXwwu0TmwHaFj&pid=Api&P=0&h=180" alt="" />
                        
                     </div>
                    <h2>Git</h2>
                </div>
                <div >
                     <div className={styles.Tail}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.22tPt9bi1FRyjOYQI8irPQHaD4&pid=Api&P=0&h=180" alt="" />
                     </div>
                    <h2>Tailwind Css</h2>
                </div>

            </div>
        </div>
        </>
    )
}

export default Skills