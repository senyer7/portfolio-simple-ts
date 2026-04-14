import styles from "./Hero.module.css";

interface HeroProps {
  name: string;
  surname: string;
  hobby: string;
  role: string;
  stack: string;
  country: string;
  avatar_url: string;
}
export default function Hero({
  name,
  surname,
  hobby,
  role,
  stack,
  country,
  avatar_url,
}: HeroProps) {
  return (
    <div className={styles.HeroDiv}>
      <img
        src={avatar_url}
        alt={`${name} ${surname}`}
        className={styles.Avatar}
        draggable={false}
      />
      <h1 className={styles.Name}>
        {name} {surname}
      </h1>
      <p className={styles.Hobby}>Хобби: {hobby}</p>
      <p className={styles.Role}>Роль: {role}</p>
      <p className={styles.Stack}>Стек: {stack}</p>
      <p className={styles.Country}>Страна: {country}</p>
    </div>
  );
}
