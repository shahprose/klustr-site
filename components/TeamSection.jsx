import { team } from '../data/team';
import TeamMember from './TeamMember';
import styles from '../styles/home.module.css';

export default function TeamSection() {
  return (
    <div>
      <div id='team' className={styles.placeholder}></div>
      <div className={styles.bodyHeaders}>
        <h1 className={styles.subtitles}>Developers</h1>
      </div>
      <div className={styles.teamContainer}>
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
