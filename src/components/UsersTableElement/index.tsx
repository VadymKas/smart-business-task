import { UsersTableElementType } from './types';
import styles from '../../styles/UsersTableElement.module.scss';

const UsersTableElement: React.FC<UsersTableElementType> = ({
  name,
  username,
  email,
  phone,
}) => {
  return (
    <article className={styles.user}>
      <h3 className={styles.user__name}>{name}</h3>
      <p className={styles.user__userName}>{username}</p>
      <a
        className={styles.user__email}
        href={`mailto:${email}`}>
        {email}
      </a>
      <a className={styles.user__tel} href={`tel:+${phone}`}>{phone}</a>
    </article>
  );
};

export default UsersTableElement;
