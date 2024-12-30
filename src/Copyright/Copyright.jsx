import styles from './Copyright.module.css'
import up from '../assets/up.png'

const Copyright = () =>{
    return (
        <>
         <div className={styles.copy}>
            <p className={styles.para}>Copyright &copy; 2024 by Surya Annadurai | All rights reserved. </p>
            <a className={styles.back} href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/000/615/375/original/vector-up-arrow-icon.jpg" alt="" />
            </a>
         </div>
        </>
    )
}

export default Copyright;