import playStoreSvg from "../../assets/playStore.svg"
import appStoreSvg from "../../assets/appStore.svg"
import boyUsingRachiSvg from "../../assets/boyUsingRachi.svg"

import styles from "./styles.module.scss"

export function DownloadApp() {
  return (
    <section className={styles.containerDownloadApp}>
      <div className={styles.contentDownloadApp}>
        <div className={styles.infos}>
          <h2>Baixe nosso app para desfrutar mais!</h2>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.
          </p>
          <div className={styles.botoes}>
            <img src={playStoreSvg} alt="PlayStore" />
            <img src={appStoreSvg} alt="AppStore" />
          </div>
        </div>
        <img className={styles.boyUsingRachi} src={boyUsingRachiSvg} alt="Boy using Rachi" />
      </div>
    </section>
  )
}