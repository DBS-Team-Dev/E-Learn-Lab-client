import { UserDTO } from '../../auth/lib';

export interface UserState {
  loading: boolean;
  users: UserDTO[];
}
