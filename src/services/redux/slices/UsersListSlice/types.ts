import { UsersTableElementType } from '../../../../components/UsersTableElement/types';

export type ListStateType = {
  list: UsersTableElementType[];
  status: null | 'loading' | 'success' | 'error';
};
