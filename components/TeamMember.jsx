import styles from '../styles/home.module.css';

export default function TeamMember({ name, image, github, linkedin }) {
  return (
    <div className={styles.teamMember} data-testid="team-member">
      <img className={styles.teamPicture} src={image} alt={name} />
      <h3>{name}</h3>
      <div className={styles.gitLinkedContainer}>
        <a href={github}>
          <img
            src="/GitHub-Mark-32px.png"
            className={styles.logos}
            alt="GitHub"
          />
        </a>
        <a href={linkedin}>
          <img src="/linkedin.png" className={styles.logos} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
