import styles from "./Individual.module.css";

export default function Individual() {
  return (
    <section id="individual" className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Индивидуальные занятия</h2>

        <div className={styles.grid}>
          <div className={styles.mainCard}>
            <h3 className={styles.subtitle}>
              Бесплатная консультация-знакомство
            </h3>

            <ul className={styles.list}>
              <li>Выявим основные цели и задачи</li>
              <li>Обсудим фронт работы</li>
              <li>Поставим временные ориентиры</li>
              <li>Выстроим удобное расписание</li>
            </ul>

            <p className={styles.note}>
              Стратегия обучения разрабатывается индивидуально
            </p>
          </div>

          <div className={styles.side}>
            <div className={styles.smallCard}>
                Формат занятий — онлайн или очно,
                в зависимости от ваших задач и графика
            </div>

            <div className={styles.smallCard}>
                Работа строится на практике,
                с разбором реальных ситуаций
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
