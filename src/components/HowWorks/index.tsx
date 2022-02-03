import userSvg from "../../assets/user.svg";
import securitySvg from "../../assets/security.svg";
import smileSvg from "../../assets/smile.svg";

import styles from "./styles.module.scss"

export function HowWorks() {
  return (
    <section className={styles.containerHowWorks}>
      <h2>Como funciona</h2>
      <div>
        <div>
          <img src={userSvg} alt="User" />
        </div>
        <div>
          <img src={securitySvg} alt="Security" />
        </div>
        <div>
          <img src={smileSvg} alt="Smile" />
        </div>
      </div>
    </section>
  )
}