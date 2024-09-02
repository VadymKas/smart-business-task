import { useSelector } from 'react-redux';
import styles from '../../styles/Filter.module.scss';
import {
  listFilterState,
  filterBy,
} from '../../services/redux/slices/ListFilterSlice';
import { useAppDispatch } from '../../services/redux/store';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { name, username, email, tel } = useSelector(listFilterState);

  const inputHandler = (e: { target: { name: any; value: any } }) =>
    dispatch(filterBy({ filter: e.target.name, value: e.target.value }));

  return (
    <ul className={styles.filter}>
      <li className={styles.filter__element}>
        <input
          type='text'
          name='name'
          placeholder='Filter by name'
          value={name}
          onChange={inputHandler}
        />
      </li>
      <li className={styles.filter__element}>
        <input
          type='text'
          name='username'
          placeholder='Filter by user name'
          value={username}
          onChange={inputHandler}
        />
      </li>
      <li className={styles.filter__element}>
        <input
          type='text'
          name='email'
          placeholder='Filter by email'
          value={email}
          onChange={inputHandler}
        />
      </li>
      <li className={styles.filter__element}>
        <input
          type='text'
          name='tel'
          placeholder='Filter by telephone'
          value={tel}
          onChange={inputHandler}
        />
      </li>
    </ul>
  );
};

export default Filter;
