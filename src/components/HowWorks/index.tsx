import userSvg from "../../assets/user.svg";
import securitySvg from "../../assets/security.svg";
import smileSvg from "../../assets/smile.svg";

import styles from "./styles.module.scss"

export function HowWorks() {
  return (
    <section className={styles.containerHowWorks}>
      <h2>Como funciona</h2>
      <div className={styles.contentHowWorks}>
        <div>
          <img src={userSvg} alt="User" />
          <h3>Crie conexões</h3>
          <p>Lorem ipsum dolor sit amet, consect</p>
        </div>
        <div>
          <img src={securitySvg} alt="Security" />
          <h3>100% gratuito</h3>
          <p>Lorem ipsum dolor sit amet, consect</p>
        </div>
        <div>
          <img src={smileSvg} alt="Smile" />
          <h3>Compartilhamento</h3>
          <p>Lorem ipsum dolor sit amet, consect</p>
        </div>
      </div>
    </section>
  )
}