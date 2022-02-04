import styles from "./styles.module.scss";

interface CardProps {
  title: string;
  price: number;
  isPreferred: boolean;
}

export function Card({ title, price, isPreferred }: CardProps) {
  return (
    <>
      {
        isPreferred ?
        <div className={styles.containerCardPreferido}>
          <h3>{title}</h3>
          <div className={styles.preferido}>
            <p>preferido</p>
          </div>
          <h4><span>R$</span>{price}<span>/mês</span></h4>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.            
          </p>
          <button type="button">Assinar</button>
        </div>
        :
        <div className={styles.containerCard}>
          <h2>{title}</h2>
          <h4><span>R$</span>{price}<span>/mês</span></h4>
          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.            
          </p>
          <button type="button">Assinar</button>
        </div>
      }
    </>
  )
}