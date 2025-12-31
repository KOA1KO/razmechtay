import styles from "./Hero.module.css";
import Button from "./Button";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Я — Данила Степанов
          <br />
          Оратор, которого понимают
        </h1>

        <p className={styles.subtitle}>
          Помогаю говорить уверенно, ясно и по делу —
          на сцене, в переговорах и публичных выступлениях
        </p>

        <a href="https://t.me/Razmechtaysa"
            className={styles.button}
            >
            Связаться в Telegram
        </a>
      </div>

      <img src={heroImage} className={styles.image} alt="" />
    </section>
  );
}
