import styles from "./Skills.module.css";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) {
    return <p>Навыки не загружены.</p>;
  }
  return (
    <div className={styles.SkillsDiv}>
      <h2 className={styles.SkillTitle}>Навыки</h2>
      <ul className={styles.SkillsList}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.SkillItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
