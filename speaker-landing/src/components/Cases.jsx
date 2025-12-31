import styles from "./Cases.module.css";

export default function Cases() {
  return (
    <section id="cases" className={styles.wrapper}>
      {/* Заголовок — ограничен 1200px */}
      <div className={styles.header}>
        <h2 className={styles.title}>Кейсы</h2>
      </div>

      {/* Карточки — на всю ширину */}
      <div className={styles.grid}>
        <CaseCard
          title="Пятигорск"
          image="/cases/pyat.jpg"
        />
        <CaseCard
          title="Казань"
          image="/cases/kazan.png"
        />
        <CaseCard
          title="Санкт-Петербург / Москва"
          image="/cases/spb.jpg"
        />
      </div>
    </section>
  );
}

function CaseCard({ title, image }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.caption}>{title}</div>
    </div>
  );
}
