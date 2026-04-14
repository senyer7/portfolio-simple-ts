import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import { data } from "./data/data";
export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.Background}>
        <Hero
          name={data.name}
          surname={data.surname}
          hobby={data.hobby}
          role={data.role}
          stack={data.stack}
          country={data.country}
          avatar_url={data.avatar_url}
        />
        <Skills skills={data.skills} />
      </div>
    </div>
  );
}
