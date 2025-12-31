import styles from "./TopStepBar.module.css";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Главная" },
  { id: "individual", label: "Занятия" },
  { id: "about", label: "Обо мне" },
  { id: "education", label: "Образование" },
  { id: "cases", label: "Кейсы" },
  { id: "cta", label: "Контакты" },
];

export default function TopStepBar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: 0.6 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.items}>
          {SECTIONS.map((s) => (
            <div
              key={s.id}
              className={`${styles.item} ${
                active === s.id ? styles.active : ""
              }`}
              onClick={() => goTo(s.id)}
            >
              {s.label}
            </div>
          ))}
        </div>

        <div
          className={`${styles.burger} ${
            open ? styles.burgerOpen : ""
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        className={`${styles.overlay} ${
          open ? styles.overlayOpen : ""
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE MENU */}
      <div
        className={`${styles.sheet} ${
          open ? styles.sheetOpen : ""
        }`}
      >
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={styles.sheetItem}
            onClick={() => goTo(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </>
  );
}
