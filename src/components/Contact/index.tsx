import styles from "./styles.module.scss";

export function Contact() {
  return (
    <section className={styles.containerContact}>
      <h2>Contato</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
      </p>
      <div className={styles.containerForm}>
        <div className={styles.containerInput}>
          <input type="text" placeholder="Seu melhor e-mail" />
          <div></div>
        </div> 
        <button type="button">Enviar</button>
      </div>
    </section>
  )
}