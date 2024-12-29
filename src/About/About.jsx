import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={styles.about_container}>
        <div className={styles.img_box}>
          <img src="https://soumyajit.vercel.app/static/media/home-main.541f8179af8209ce03ccf2178fe62dbf.svg" alt="" />
      </div>
      <div className={styles.about_con}>
          <h1 className={styles.about_head}>
            About <span className={styles.me}>Me</span>
          </h1>
          <h2 className={styles.fullstack}>Full Stack <span className={styles.developer}>Developer</span> !</h2>
          <p className={styles.para}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            dicta assumenda, reiciendis, est impedit magnam nemo fugiat
            voluptate, sit officiis ad illo qui quod dignissimos quo quidem
            explicabo sed repellendus necessitatibus quos? Quia vitae nisi
            repellendus molestias quo natus possimus, quidem beatae, vel
            adipisci at doloribus tempora quam. Alias, suscipit.
          </p>
          <div>
            <a className={styles.read} href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
