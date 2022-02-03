import elipseAzulSvg from "../../assets/elipseAzul.svg";
import elipseCinzaSvg from "../../assets/elipseCinza.svg";

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.containerHeader}>
      <div>
        <img src={elipseAzulSvg} alt="" />
        <img src={elipseCinzaSvg} alt="" />
        <h2>Rachi</h2>
      </div>
      <div className={styles.menuToggle}>
        <div className={styles.one}></div>
        <div className={styles.two}></div>
        <div className={styles.three}></div>
        <div className={styles.four}></div>
      </div>
      <nav> 
        <a href="#">Funcionalidades</a>
        <a href="#">App</a>
        <a href="#">Planos</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  )
}