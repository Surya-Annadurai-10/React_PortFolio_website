import styles from "./Contact.module.css"

const Contact = () =>{
    return (
        <>
        <div id="5" className={styles.contact_con}>
            <h1>Contact <span className={styles.me}> Me !</span></h1>
            <div className={styles.inner}>
             <div className={styles.top}>
                <input type="text" placeholder={"Full Name"} />
                <input type="email" placeholder={"Email Address"} />
             </div>
             <div className={styles.middle}>
             <input type="number" placeholder={"Mobile Number"} />
             <input type="text" placeholder={"Email Subject"} />
             </div>
             <div className={styles.down}>
                <textarea name="" id="" rows={"10"} cols={"20"} placeholder={"Your Message"}></textarea>
             </div>
             <a className={styles.send} href="">Send Message</a>
            </div>
        </div>
        </>
    )
}

export default Contact;