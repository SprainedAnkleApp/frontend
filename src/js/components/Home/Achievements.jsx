import { Achievement } from '.';

import styles from './Achievements.module.css';

const Achievements = ({ user }) => {
  const achievements = [
    { url: user.photoUrl, name: 'Mock_list_1', progress: 33 / 99 },
    { url: user.photoUrl, name: 'Mock_list_2', progress: 79 / 99 },
  ].map((achievement) => <Achievement {...achievement} className={styles.achievement} />);
  return (
    <>
      <Achievement
        url={user.photoUrl}
        name="highlighted"
        progress={1 / 3}
        className={styles.achievement}
      />
      <div className={styles.wrapper}>
        <div className={styles.title}>Achievements</div>
        <div className={styles.achievements}>{achievements}</div>
      </div>
    </>
  );
};

export default Achievements;
