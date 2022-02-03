import boyCodingSvg from "../../assets/boyCoding.svg";

import styles from "./styles.module.scss";

export function Presentation() {
  return (
    <section className={styles.containerPresentation}>
      <div className={styles.contentPresentation}>
        <div>
          <h1>
            Rachi, <br/>
            é tudo que você <br/>
            precisa em um só lugar.
          </h1>
          <button type="button">
            Cadastrar-se
          </button>
        </div>
        <img src={boyCodingSvg} alt="Boy coding" />
      </div>
    </section>
  )
}