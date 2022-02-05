import { Card } from "../Card";
import styles from "./styles.module.scss";

export function Plans() {
  return (
    <section id="plans" className={styles.containerPlans}>
      <div className={styles.planos}>
        <h2>Nossos Planos</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.
        </p>
      </div>
      <div className={styles.cards}>
        <Card
          isPreferred={false}
          title={"Bronze"}
          price={28}
          key={1} 
        />
        <Card
          isPreferred={true}
          title={"Prata"}
          price={57}
          key={2} 
        />
        <Card
          isPreferred={false}
          title={"Ouro"}
          price={94}
          key={3} 
        />
      </div>
    </section>
  )
}