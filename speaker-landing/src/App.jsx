import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Cases from "./components/Cases";
import Individual from "./components/Individual";
// import Reviews from "./components/Reviews";
import FinalCTA from "./components/FinalCTA";
import TopStepBar from "./components/TopStepBar";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <TopStepBar />

      <Hero />
      <Individual />
      <About />
      <Education />
      <Cases />
      {/* <Reviews /> */}
      <FinalCTA />
    </div>
  );
}


