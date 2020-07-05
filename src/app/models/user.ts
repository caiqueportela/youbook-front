import { Role } from './role';
export class User {

  userId: number;
  username: string;
  email: string;
  isAdmin: boolean;
  isAuthor: boolean;
  roles: Role[];

}
