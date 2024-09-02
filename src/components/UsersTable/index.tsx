import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import getUsers from '../../services/redux/api/getUsers';
import { useAppDispatch } from '../../services/redux/store';
import { usersListState } from '../../services/redux/slices/UsersListSlice';
import UsersTableElement from '../UsersTableElement';
import styles from '../../styles/UsersTable.module.scss';
import Filter from '../Filter';
import { listFilterState } from '../../services/redux/slices/ListFilterSlice';

const UsersTable: React.FC = () => {
  const { list } = useSelector(usersListState);
  const {
    name: filterByName,
    username: filterByUsername,
    email: filterByEmail,
    tel: filterByPhone,
  } = useSelector(listFilterState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const filteredList = list.filter(
    ({ name, username, email, phone }) =>
      name.toLowerCase().includes(filterByName.toLowerCase()) &&
      username.toLowerCase().includes(filterByUsername.toLowerCase()) &&
      email.toLowerCase().includes(filterByEmail.toLowerCase()) &&
      phone.toLowerCase().includes(filterByPhone.toLowerCase()),
  );

  return (
    <section className={styles.table}>
      <h1 className={styles.table__title}>User Management Table</h1>
      <section className={styles.table__body}>
        <ul className={styles.table__navbar}>
          <li>Name</li>
          <li>Username</li>
          <li>Email</li>
          <li>Telephone</li>
        </ul>
        <Filter />
        <div className={styles.table__list}>
          {filteredList.map((user) => (
            <UsersTableElement
              key={user.id}
              {...user}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default UsersTable;
