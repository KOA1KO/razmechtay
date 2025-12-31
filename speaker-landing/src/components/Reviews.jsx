import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <section id="reviews" className={styles.section}>
      <h2 className={styles.title}>Отзывы</h2>

      <div className={styles.grid}>
        <Review text="Прекрасный курс, заметный прогресс уже через несколько занятий." />
        <Review text="Спасибо за работу! Стал увереннее говорить на публике." />
        <Review text="Данила очень точно чувствует, где именно затык." />
      </div>
    </section>
  );
}

function Review({ text }) {
  return (
    <div className={styles.card}>
      <p>{text}</p>
    </div>
  );
}
