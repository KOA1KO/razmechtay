import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="cta" className={styles.section}>
      <h2 className={styles.title}>
        Сделаем так, чтобы вас услышали
      </h2>

      <a href="https://t.me/Razmechtaysa"
                  className={styles.button}
                  >
                  Связаться в Telegram
              </a>

      <p className={styles.contacts}>
        Москва · Санкт-Петербург · Казань
      </p>
    </section>
  );
}
