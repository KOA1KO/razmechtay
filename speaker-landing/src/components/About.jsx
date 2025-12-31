import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Обо мне</h2>

        <div className={styles.textBlock}>
          <p className={styles.text}>
            Я помогаю людям уверенно говорить в ситуациях, где важно
            производить впечатление и доносить мысль с первого раза.
          </p>

          <p className={styles.text}>
            Мы не учим заученные тексты и не играем роли.
            Работа строится вокруг структуры речи, логики,
            подачи и внутренней уверенности.
          </p>
        </div>

        <div className={styles.cardsRow}>
          <div className={styles.smallCard}>
            <h3 className={styles.cardTitle}>Практика</h3>
            <p className={styles.cardText}>100+ часов выступлений</p>
          </div>

          <div className={styles.smallCard}>
            <h3 className={styles.cardTitle}>Индивидуально</h3>
            <p className={styles.cardText}>50+ клиентов</p>
          </div>

          <div className={styles.smallCard}>
            <h3 className={styles.cardTitle}>Формат</h3>
            <p className={styles.cardText}>Онлайн и офлайн</p>
          </div>
        </div>
      </div>
    </section>
  );
}
