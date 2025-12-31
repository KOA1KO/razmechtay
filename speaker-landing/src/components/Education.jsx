import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.title}>Образование</h2>

        <div className={styles.grid}>
            <div className={styles.card}>
            Менторская программа по выстраиванию частной практики
            для педагогов по технике речи и ораторскому мастерству
            Марии Ефремовой
            </div>

            <div className={styles.card}>
            Курс «Техники публичных выступлений и презентаций»
            Евгении Шестаковой при ИТМО
            </div>

            <div className={styles.card}>
            Институт кино и телевидения
            (актёрская мастерская А. А. Дежонова)
            </div>

            <div className={styles.card}>
            «Голос может» — заочный курс
            Седы Каспаровой
            </div>

            <div className={styles.card}>
            Тренинг «Искусство переговоров»
            Юрия Щелканова
            </div>

            <div className={styles.card}>
            Обучающий психологический курс
            по работе с детьми-сиротами
            </div>

            <div className={styles.card}>
            Тренинг по НЛП
            от Александра Тимошенко
            </div>

            <div className={styles.card}>
            Курс «Ключевые действия»
            Седы Каспаровой
            </div>

            <div className={styles.card}>
            Курс «Техника речи»
            от Евгении Шестаковой
            </div>
        </div>
      </div>
    </section>
  );
}
